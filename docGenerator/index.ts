import path from 'path';
import chalk from 'chalk';
import handlebars from 'handlebars';

const importHelper = require('handlebars-helper-import')(handlebars);

handlebars.registerHelper('import', importHelper);

const pwd = process.cwd();
const current = __dirname;

const sampleTemplate = handlebars.compile(`{{import "${
    path.relative(pwd,path.join(current,'./templates/sample.hbs'))
}"}}`);


console.log(
    chalk.green(sampleTemplate({name:"openfn-react-doc"}))
);