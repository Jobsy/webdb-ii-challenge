
const express = require("express");

const dB = require("./db");

const router = express.Router();

// router.get("/", (req, res) => {
//     res.status(200).json("It's workinggggggggggggggggg!!!")
// })

router.get("/", (req, res) => {
    dB.find()
        .then((cars) => {
            res.status(200).json(cars)
        })
        .catch(() => {
            res.status(500).json({ error: "The cars information could not be retrieved." })
        })
})

router.get("/:id", (req, res) => {
    const { id } = req.params;

    dB.findById(id)
        .then((cars) => {

            if (cars.length === 0) {
                res.status(404).json({ message: "The post with the specified ID does not exist." })
            }
            res.status(200).json({ cars: cars })
        })
        .catch((err) => {
            res.status(500).json({ error: "The post information could not be retrieved." + err })
        })
})



module.exports = router;