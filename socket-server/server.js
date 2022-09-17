// Imports

const {Server} = require("socket.io");

// Variables
//  User Management
clients = new Map();

// Server start
server = new Server(8000);

/**
 * Executes whenever a client connects (contains disconnect code)
 */
server.on("connection", (socket) => {

    console.log("Connected: " + socket.id);
    //Add to client map
    clients.set(socket, socket.id);

    //Disconnects
    socket.on("disconnect", () =>  {
        clients.delete(socket);
        console.info("Disconnected: " + socket.id);
    });

});


/**
 * Test interval to see if everything is connected
 */
setInterval(() => {

    //loop through clients
    for (const [client, id] of clients.entries()) {
        client.emit("test", id);
    }

}, 1000);