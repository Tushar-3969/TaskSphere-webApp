const express = require("express");
const app = express();
const port = 8080;

const bodyParser = require("body-parser");
const cors = require("cors");

const {PositionsModel} = require("./model/PositionsModel");
const {HoldingModel} = require("./model/HoldingModel");

const mongoose = require("mongoose");
main()
  .then(() => {
    console.log("Database connect successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/TradeNest");
}

app.use(cors());
app.use(bodyParser.json());

app.get("/allHolding",async(req,res)=>{
  let allHolding = await HoldingModel.find({});
  res.json(allHolding);
})

app.get("/allPositions",async(req,res)=>{
  let allPositions= await PositionsModel.find({});
  res.json(allPositions);
})

app.listen(port, () => {
  console.log("app is listening on port");
});
