"use strict";
exports.__esModule = true;
exports.parse = void 0;
var randomfox_1 = require("randomfox");
function parse(custom) {
    if (custom) {
        console.log("\n===============Foxes===============\n" + randomfox_1.customfox(custom.split(" ")) + "\n");
        return true;
    }
    else {
        console.log("\n===============Foxes===============\n" + randomfox_1.fox() + "\n");
        return false;
    }
}
exports.parse = parse;
