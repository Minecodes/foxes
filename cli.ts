import { fox, customfox } from "randomfox";

function parse(custom: string) {
    if (custom) {
        console.log(`
===============Foxes===============
${customfox(custom.split(" "))}
`);
        return true;
    } else {
        console.log(`
===============Foxes===============
${fox()}
`);
        return false;
    }
}

export { parse }