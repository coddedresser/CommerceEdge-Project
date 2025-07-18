const mongoose = require("mongoose")
require('dotenv').config();

const mongoDbUrl=process.env.mongoDbUrl
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}