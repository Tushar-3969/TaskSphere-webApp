import mongoose from "mongoose";
const { Schema } = mongoose;

const WatchListSchema = new Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
});

module.exports = { WatchListSchema};