const express = require("express")

const server = express();

server.use(express.json())

server.get("/", (req, res) => {
    res.status(200).json({
        server: "server is working"
    })
})

module.exports = server;