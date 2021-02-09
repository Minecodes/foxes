"use strict";
exports.__esModule = true;
exports.parse = void 0;
var randomfox_1 = require("randomfox");
function parse(args, custom) {
    if (custom) {
        var urls = custom.split(" ");
        console.log("\n===============Foxes===============\n" + randomfox_1.customfox(urls) + "\n");
    }
    else {
        console.log("\n===============Foxes===============\n" + randomfox_1.fox() + "\n");
    }
}
exports.parse = parse;
