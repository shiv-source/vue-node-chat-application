const express = require('express');
const app = require('./app');
const http = require("http");



const port = 3000;

const server = http.createServer(app);

server.listen(port , () => {
    console.log(`server is running at port : ${port}`);
});

const {chatting}   = require('./chat');
chatting(server);