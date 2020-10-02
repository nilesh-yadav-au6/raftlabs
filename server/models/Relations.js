const mongoose = require("mongoose")
const Schema = mongoose.Schema

const relationSchema = new Schema({
    userName1:{
        type:String,
        required:true
    },
    userName2:{
        type:String,
        required:true
    },
    relation:{
        type:String
    }
})


const Relation = mongoose.model("relation" , relationSchema)
module.exports = Relation