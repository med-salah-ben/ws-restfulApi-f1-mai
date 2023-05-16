const mongoose = require("mongoose");
const {Schema , model} = mongoose;

const ContactSchema = new Schema({
    name:{type:String , required:true},
    email:{type:String , required:true , unique:true},
    phone:{type:String , required:true , unique:true}
})

const Contact = model("Contacts",ContactSchema);

module.exports = Contact;