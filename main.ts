import meow from "meow";
import { parse } from "./cli";
import { version, author } from "./package.json";

const cli = meow(`
Author: ${author}

	Usage
	  $ foxes <args>

	Options
	  --custom <args>, -c  gives you an random fox image from your fox image urls
      --version, v become the version
      --help, -h opens the help

	Examples
	  $ foxes
	  https://randomfox.ca/images/1.jpg
`, {
	flags: {
		custom: {
			type: 'string',
			alias: 'c'
		},
        version: {
            type: 'boolean',
            alias: 'v'
        },
        help: {
            type: 'boolean',
            alias: 'h'
        }
	}
});

if (cli.flags.help) {
    console.log(`
Author: ${author}

    Usage
        $ foxes <args>
    
    Options
        --custom <args>, -c  gives you an random fox image from your fox image urls
        --version, v become the version
        --help, -h opens the help

    Examples
        $ foxes
        https://randomfox.ca/images/1.jpg
`);
} else if (cli.flags.version) {
    console.log(`Version: ${version}`);
} else {
    parse(cli.input, cli.flags.custom);
}