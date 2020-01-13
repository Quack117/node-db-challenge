const router = require("express").Router();

const resource = require("./resourceModal.js")

router.get("/", (req, res) => {
    resource.find()
        .then(resources => {
            res.json(resources)
        })
        .catch(err => res.send(err))
});

router.post("/", (req, res) => {
    resource.add(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

module.exports = router