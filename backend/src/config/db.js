const mongoose = require("mongoose")

const mongoDbUrl="mongodb+srv://jackalxa1:GH3hipshjCht733I@cluster0.xd86h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}