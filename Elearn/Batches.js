const mongoose = require("mongoose")

const batchesschema= new mongoose.Schema({
    BatcheType:String,
    course:String,
    Date:Date,
    Timing:String,
    Duration:String,
    Triner:String,
   
})
module.exports = mongoose.model("batches",batchesschema)