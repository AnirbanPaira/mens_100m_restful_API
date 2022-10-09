const express = require("express");
const router = new express.Router();

//mensRanking is not included here
const MensRanking = require("../models/mens");

router.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    console.log(req.body);
    const insertMens = await addingMensRecords.save();
    res.status(201).send(insertMens);
  } catch (error) {
    res.status(400).send(error);
  }
});

// WE WILL HANDLE GET REQUEST
router.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({}).sort({ ranking: 1 });
    res.send(getMens);
  } catch (error) {
    res.status(400).send(error);
  }
});

//we will handle get request for individual
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findById({ _id: _id });
    res.send(getMen);
  } catch (error) {
    res.status(400).send(error);
  }
});

//we will handle patch request for individual
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    //to get new and updated value use new:true
    const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMen);
  } catch (error) {
    res.status(500).send(error);
    //server gets its errror at port 500
  }
});

//to apply delete operation
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndDelete(_id);
    res.send(getMen);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
