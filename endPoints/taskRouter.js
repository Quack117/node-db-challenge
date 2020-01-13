const router = require("express").Router();

const task = require("./taskModal.js")

router.get("/", (req, res) => {
    task.find()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => res.send(err))
});

router.post("/", (req, res) => {
    task.add(req.body)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

module.exports = router