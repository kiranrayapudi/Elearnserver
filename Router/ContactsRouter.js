let express= require("express");
let router = express.Router();
let contacts =  require("../Elearn/Contacts")
 

router.post("/",async (req,res)=>{
    let contact = new contacts (req.body);
    let result = await contact.save();
    res.send(result)
})
router.get("/",async (req,res)=>{
    let result = await contacts.find()
    if (result.length > 0) {
        res.send(result)
    }
    else {
        res.send({result:"No data found"})
    }
 
 })
 


module.exports = router;