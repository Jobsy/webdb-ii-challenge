
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

router.post("/", (req, res) => {
    const post = req.body;
    const { VIN, make, model, mileage,  transmissionType, status } = req.body;
    const { url } = req;
    if (!VIN || !make || !model || !mileage) {
        res.status(400).json({ errorMessage: "Please provide VIN, make, model, and mileage for the car." })
    }
    dB.insert(post)
        .then(() => {
            res.status(201).json({ postedContent: post, url: url, operation: "POST" })
        })
        .catch(() => {
            res.status(500).json({ error: "There was an error while saving the post to the database" })
        })
});



module.exports = router;