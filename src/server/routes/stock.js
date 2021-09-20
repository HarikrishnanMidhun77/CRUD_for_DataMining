const express = require("express");
const router = express.Router();
const Stock = require("../models/Stock");
router.post("/addStock", (req, res) => {
  console.log(`req.body`, req.body);
  new Stock(req.body.StockObj).save().then((prop) => res.json(prop));
});
router.get("/getAllStocks", (req, res) => {
  Stock.find()
    .then((stocks) => res.json(stocks))
    .catch((err) =>
      res.status(404).json({ nopropsfound: "No properties found" })
    );
});
router.post("/getStock", (req, res) => {
  Stock.find({ _id: req.body.id })
    .then((stocks) => res.json(stocks))
    .catch((err) =>
      res.status(404).json({ nopropsfound: "No properties found" })
    );
});
router.post("/editStock", (req, res) => {
  Stock.findOneAndUpdate(
    { _id: req.body.id },
    { $set: req.body.StockObj },
    { new: true }
  )
    .then((stocks) => res.json(stocks))
    .catch((err) =>
      res.status(404).json({ nopropsfound: "No properties found" })
    );
});

router.post("/deleteStock", (req, res) => {
  Stock.findOneAndDelete({ _id: req.body.id })
    .then((stocks) => res.json(stocks))
    .catch((err) =>
      res.status(404).json({ nopropsfound: "No properties found" })
    );
});

module.exports = router;
