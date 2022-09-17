// Imports
import {Server, Socket} from "socket.io";

// Variables
//  User Management
let clients = new Map<string, Socket>();

// Server start
const server = new Server(8000);

/**
 * Executes whenever a client connects (contains disconnect code)
 */
server.on("connection", (socket) => {

    console.log("Connected: " + socket.id);
    //Add to client map
    clients.set(String(socket.id), socket);

    //Disconnects
    socket.on("disconnect", () =>  {
        clients.delete(String(socket.id));
        console.info("Disconnected: " + socket.id);
    });

});


/**
 * Test interval to see if everything is connected
 */
setInterval(() => {

    //loop through clients
    for (const [id, client] of clients.entries()) {
        client.emit("test", id);
    }

}, 1000);