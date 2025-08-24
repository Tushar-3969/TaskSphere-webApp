const express = require("express");
const app = express()
const port = 8080;

const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("Database connect successfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/TradeNest');
}

app.use(express.urlencoded())


app.listen(port,()=>{
    console.log("app is listening on port");
})