const { startServer, stopServer } = require("nativescript-dev-appium");

before("start server", async () => {
    await startServer();
});

after("stop server", async () => {
    await stopServer();
});
