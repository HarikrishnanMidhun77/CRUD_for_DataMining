const mongoose = require("mongoose");
const stockSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  latest_price: {
    type: String,
  },
  previous_price: {
    type: String,
  },
  low: {
    type: String,
  },
  high: {
    type: String,
  },
  percentage: {
    type: String,
  },
  time: {
    type: String,
  },
  date: {
    type: String,
  },
});
const Stock = mongoose.model("Stock", stockSchema);
module.exports = Stock;
