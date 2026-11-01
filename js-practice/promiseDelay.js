function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    console.log("Starting...");

    await delay(2000);

    console.log("Executed after 2 seconds!");

    await delay(1000);

    console.log("Executed after another second!");
}

run();