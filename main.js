const { fox, customfox } = require("randomfox");
const { Command } = require('commander');
const program = new Command();
program.version('1.0.1');

program
  .option('-d, --debug', 'output extra debugging')
  .option('-c, --custom <urls>', 'gives you an random fox image from your fox image urls');

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
if (options.custom) {
    console.log(customfox(options.custom.split(" ")));
} else {
    console.log(fox());
}