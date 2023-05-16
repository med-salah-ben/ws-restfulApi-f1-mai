const Contact = require("../model/Contact");

exports.postContact = async(req,res)=>{
    try {
        const {name , email , phone} = req.body
        if(!name || !email || !phone){
            return res.status(400).send({msg:"Please Enter Fields"})
        }
        const checkExistEmail = await Contact.findOne({email:email})
        if(checkExistEmail){
            return res.status(400).send({msg:"Contact already exist"})
        }
        const checkExistPhone = await Contact.findOne({phone:phone})
        if(checkExistPhone){
            return res.status(400).send({msg:"Phone already exist"})
        }
        const newContact = new Contact({name,email,phone})
        await newContact.save()
        return res.status(201).send({msg:"New Contact Created." , response:newContact})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:"Sorry we Can not add new contact"})
    }
}

exports.getContacts = async(req,res)=>{
    try {
        const result = await Contact.find({})
        return res.status(200).json({msg:"Getting Contacts Successfully", response:result})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:"Sorry We Can Not Get Contacts..."})
    }
}

exports.getContactByID = async(req,res)=>{
    try {
        const {id} = req.params
        const result = await Contact.findById(id)
        if(!result){
            return res.status(400).send({msg:"There is No Contact With This ID"})
        }
        return res.status(200).json({msg:"Getting Contact By ID Successfully", response:result})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:"Sorry We Can Not Get Contact By ID..."})
    }
}


exports.deleteContactByID = async(req,res)=>{
    try {
        const {id} = req.params
        await Contact.deleteOne({_id:id})
        return res.status(200).json({msg:"Deleted Contact By ID Successfully"})
    } catch (error) { 
        console.log(error)
        return res.status(500).send({msg:"Sorry We Can Not Delete Contact By ID..."})
    }
}


exports.updateContact = async(req,res)=>{
    try {
        await Contact.updateOne({_id:req.params.id}, {$set:{...req.body}})
        return res.status(200).json({msg:"Updated Contact By ID Successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:"Sorry We Can Not Update Contact By ID..."})
    }
}