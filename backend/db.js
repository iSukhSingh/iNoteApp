const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inote"


const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to db");
    })
}

module.exports = connectToMongo;