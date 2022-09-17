//Imports
import io from "socket.io-client";

//Client Start

const ioClient = io("http://localhost:8000").connect();

/**
 * Test Call to test connection between server and (mutliple clients)
 */
ioClient.on("test", (msg) => {
    console.log(msg)
});