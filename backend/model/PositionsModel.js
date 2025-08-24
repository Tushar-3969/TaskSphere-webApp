import mongoose from "mongoose";
const { model} = mongoose;

const {PositionsSchema} = require("../schemas\PositionsSchema.js");

const PositionsModel = new model("Position",PositionsSchema)


module.exports= { PositionsModel };