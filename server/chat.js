const chatting = async (server) => {
    const io = require('socket.io')(server);
    io.on("connect", (socket) => {
        console.log("connected");
        let data = {
            message : "Welcome to chat application.",
            sender : "Chat Bot"
        }
        io.emit("greetingMessage", data );
        socket.on("sendMessage", (sendData) => {
            io.emit("reciveMessage", (sendData));
        })

    })

}

module.exports = {
    chatting
};