/**
 * Name: foxes
 * Version: 1.0.8
 * Authon: Minecodes
 */
import { fox, customfox } from "randomfox";

function parse(args, custom: string) {
    if (custom) {
        var urls = custom.split(" ");
        console.log(`
===============Foxes===============
${customfox(urls)}
`);
    } else {
        console.log(`
===============Foxes===============
${fox()}
`);
    }
}

export { parse }