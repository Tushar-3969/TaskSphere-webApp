import mongoose from "mongoose";
const { Schema } = mongoose;

const HoldingSchema = new Schema({
  name: {
    type: String,
    required
  },
  qty: { 
    type: Number,
    required
  },
  avg: { 
    type: Number ,
    required
  },
  price: { 
    type: Number ,
    required
  },
  net: { 
    type: String ,
    required
  },
  day: {
     type: String ,
     required
    },
});

module.exports = { HoldingSchema };
