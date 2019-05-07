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

// init route arguments
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
    })
    routeArguments.push(oneRouteArgument);
})


// console.log(prettyjson.render(routeArguments));

const pwd = process.cwd();
const current = __dirname;

const routesImportTemplate = handlebars.compile(`{{import "${
    path.relative(pwd,path.join(current,'./templates/routesImports.hbs'))
}"}}`);

const routesCompItemsTemplate = handlebars.compile(`{{import "${
    path.relative(pwd,path.join(current,'./templates/routesCompItems.hbs'))
    }"}}`);

console.log(
    chalk.green(routesImportTemplate({arg:routeArguments}))
);

console.log(
    chalk.green(routesCompItemsTemplate({arg:routeArguments}))
);