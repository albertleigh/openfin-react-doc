import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import handlebars from 'handlebars';
import shell from 'shelljs';
import camelcase from 'camelcase';
import prettyjson from 'prettyjson';

const importHelper = require('handlebars-helper-import')(handlebars);

handlebars.registerHelper('import', importHelper);

import seed from './seed';

import { IRouteArgument, ICompArgument } from './GeneratorTypes';


const routeArguments:IRouteArgument[] = [];
const compArguments:ICompArgument[] = [];

// init shared lang sec of comp arguments
const sharedLangSec:Partial<ICompArgument> & {langs, defaultLang} = {
    langs: [], defaultLang:{langVar:''}
}
seed.languages.forEach( oneLang => {
    sharedLangSec.langs.push({
        language:oneLang,
        langLabel:oneLang.replace('_','-'),
        langVar:camelcase(oneLang),
    });
});
sharedLangSec.defaultLang.langVar = sharedLangSec.langs[seed.defaultLanguageIndex].langVar;

// init route & comp arguments
seed.documents.forEach(doc => {
    const oneRouteArgument:IRouteArgument = {
        tabName:doc.name,
        children:[],
    };
    doc.children.forEach( child => {

        oneRouteArgument.children.push({
            FullName:camelcase([doc.name,child],{pascalCase:true}),
            fullName:camelcase([doc.name,child]),
            tabName:doc.name
        })

        compArguments.push({
            FullName:camelcase([doc.name,child],{pascalCase:true}),
            fullName:camelcase([doc.name,child]),
            tabName:doc.name,
            itemName: child,
            ...sharedLangSec,
        })

    })
    routeArguments.push(oneRouteArgument);
})
// console.log(prettyjson.render(routeArguments));
// console.log(prettyjson.render(compArguments));


const pwd = process.cwd();
const current = __dirname;

const routesImportTemplate = handlebars.compile(`{{import "${
    path.relative(pwd,path.join(current,'./templates/routesImports.hbs'))
}"}}`);

const routesCompItemsTemplate = handlebars.compile(`{{import "${
    path.relative(pwd,path.join(current,'./templates/routesCompItems.hbs'))
    }"}}`);

const docCompTemplate = handlebars.compile(`{{import "${
    path.relative(pwd,path.join(current,'./templates/docComp.hbs'))
}"}}`);

// console.log(
//     chalk.green(routesImportTemplate({arg:routeArguments}))
// );

//
// console.log(
//     chalk.green(routesCompItemsTemplate({arg:routeArguments}))
// );

// ---------------------------------------------------------
// ------------------INJECT DOC ROUTES----------------------
// ---------------------------------------------------------
const importBegin = '// @@BEGIN OF Generated routes imports';
const importEnd = '// @@END OF Generated routes imports';
const importBeginIdentifier = importBegin.replace('//','\\/\\/');
const importEndIdentifier = importEnd.replace('//','\\/\\/');


const routeItemBegin = '// @@BEGIN OF Generated routes comp items';
const routeItemEnd = '// @@END OF Generated routes comp items';
const routeItemBeginIdentifier = routeItemBegin.replace('//','\\/\\/');
const routeItemEndIdentifier = routeItemEnd.replace('//','\\/\\/');

const otherRegex  = '[^]*';

const targetDocRouteTs = path.join(pwd, 'src/routes/document.ts');

if (!fs.existsSync(targetDocRouteTs)){
    throw new Error(`${targetDocRouteTs} not exit`);
}

let content = fs.readFileSync(targetDocRouteTs, 'utf8');

// @ts-ignore
content = content.replace(new RegExp(`${importBeginIdentifier}${otherRegex}${importEndIdentifier}`),(match,offset,str)=>{
    const importContent = routesImportTemplate({arg:routeArguments});
    return `${importBegin}\n${importContent}${importEnd}`;
})
// @ts-ignore
content = content.replace(new RegExp(`${routeItemBeginIdentifier}${otherRegex}${routeItemEndIdentifier}`),(match,offset,str)=>{
    const routesCompItems = routesCompItemsTemplate({arg:routeArguments});
    return `${routeItemBegin}\n${routesCompItems}${routeItemEnd}`;
})

fs.writeFileSync(targetDocRouteTs,content,'utf8');

console.log(chalk.cyan(`${targetDocRouteTs} modified`));

// ---------------------------------------------------------
// ------------------GENERATE COMPs------------------------
// ---------------------------------------------------------

// remove view doc folder if it exist
shell.rm('-rf',path.join(pwd,'src/view/doc'));
// generate comp files
compArguments.forEach(compArgument => {
    const relativePath = `src/views/doc/${compArgument.tabName}/${compArgument.FullName}.tsx`;
    const fullPath = path.join(pwd,relativePath);
    const onlyDirectory = path.dirname(fullPath);

    if (!fs.existsSync(onlyDirectory)){
        shell.mkdir('-p',onlyDirectory);
    }

    const content = new Uint8Array(Buffer.from(docCompTemplate(compArgument)));
    fs.writeFile(fullPath,content,(error)=>{
        if (error) throw error;
        console.log(chalk.cyan(`${relativePath} generated`));
    })

})