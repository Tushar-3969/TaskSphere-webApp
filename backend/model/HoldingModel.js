const mongoose = require("mongoose");
const { model} = mongoose;

const {HoldingSchema} = require("../schemas/HoldingSchema.js");

const HoldingModel = new model("Holding",HoldingSchema)


module.exports= { HoldingModel };