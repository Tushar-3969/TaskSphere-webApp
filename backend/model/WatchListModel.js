import mongoose from "mongoose";
const { model} = mongoose;

const {WatchListSchema} = require("../schemas\WatchListSchema.js");

const WatchlistModel = new model("WatchList",WatchListSchema)


module.exports= { WatchlistModel };