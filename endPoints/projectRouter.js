const router = require("express").Router();

const Project = require("./projectModal.js")

router.get("/", (req, res) => {
    Project.find()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => res.send(err))
});

router.post("/", (req, res) => {
    Project.add(req.body)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

module.exports = router