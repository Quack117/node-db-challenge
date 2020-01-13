const express = require("express")

const projectRouter = require("../endPoints/projectRouter.js")
const resourceRouter = require("../endPoints/resourceRouter.js")
const taskRouter = require("../endPoints/taskRouter.js")

const server = express();

server.use(express.json())

server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);




server.get("/", (req, res) => {
    res.status(200).json({
        server: "server is working"
    })
})

module.exports = server;