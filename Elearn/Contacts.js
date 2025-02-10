const mongoose = require("mongoose")

const contactsschema= new mongoose.Schema({
 
    username:String,
    mobile:String,
    email:String,
    course:String,
    message:String,


    });

module.exports = mongoose.model("contacts",contactsschema)