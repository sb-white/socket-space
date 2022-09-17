//Imports

const io = require("socket.io-client");

//Client Start

const ioClient = io.connect("http://localhost:8000");

/**
 * Test Call to test connection between server and (mutliple clients)
 */
ioClient.on("test", (msg) => {
    console.log(msg)
});