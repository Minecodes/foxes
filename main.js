"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var meow_1 = __importDefault(require("meow"));
var cli_1 = require("./cli");
var package_json_1 = require("./package.json");
var cli = meow_1["default"]("\nAuthor: " + package_json_1.author + "\n\n\tUsage\n\t  $ foxes <args>\n\n\tOptions\n\t  --custom <args>, -c  gives you an random fox image from your fox image urls\n      --version, v become the version\n      --help, -h opens the help\n\n\tExamples\n\t  $ foxes\n\t  https://randomfox.ca/images/1.jpg\n", {
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
    console.log("\nAuthor: " + package_json_1.author + "\n\n    Usage\n        $ foxes <args>\n    \n    Options\n        --custom <args>, -c  gives you an random fox image from your fox image urls\n        --version, v become the version\n        --help, -h opens the help\n\n    Examples\n        $ foxes\n        https://randomfox.ca/images/1.jpg\n");
}
else if (cli.flags.version) {
    console.log("Version: " + package_json_1.version);
}
else {
    cli_1.parse(cli.flags.custom);
}
