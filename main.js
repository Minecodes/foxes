const { fox } = require("randomfox");
const { Command } = require('commander');
const update = require('./update');
const custom = require('./customfox');
const program = new Command();
program.version(require("./package.json").version); 

program
  .option('-d, --debug', 'output extra debugging')
  .option('-c, --custom', 'gives you an random fox image from your fox image urls');

program.parse(process.argv);

const options = program.opts();
if (options.debug) {console.log(options);console.log(program.args);};
if (options.custom) {
    custom(program.args);
    update();
} else {
    console.log(fox());
    update();
}