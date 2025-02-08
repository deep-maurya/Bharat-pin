const { getPinCodeDetails } = require("./index");

async function test() {
    try {
        const result = await getPinCodeDetails("110001");
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

test();
