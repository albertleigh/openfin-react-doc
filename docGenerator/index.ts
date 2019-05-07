import path from 'path';
import chalk from 'chalk';
import handlebars from 'handlebars';
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

console.log(
    chalk.green(docCompTemplate(compArguments[0]))
);