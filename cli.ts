/**
 * Name: foxes
 * Version: 1.0.10
 * Authon: Minecodes
 */
import { fox, customfox } from "randomfox";

function parse(custom: string): void {
    if (custom) {
        console.log(`
===============Foxes===============
${customfox(custom.split(" "))}
`);
    } else {
        console.log(`
===============Foxes===============
${fox()}
`);
    }
}

export { parse }
