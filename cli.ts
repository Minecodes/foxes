import { fox, customfox } from "randomfox";

function parse(custom: string): void {
    if (custom) {
        console.log(`
===============Foxes===============
${customfox(custom.split(" ")) as string}
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
