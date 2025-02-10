let express= require("express");
let router = express.Router();
let batches =  require("../Elearn/Batches")
 

router.post("/",async (req,res)=>{
    let batche = new batches (req.body);
    let result = await batche.save();
    res.send(result)
})
router.get("/",async (req,res)=>{
    let result = await batches.find()
    if (result.length > 0) {
        res.send(result)
    }
    else {
        res.send({result:"No data found"})
    }
 
 })
 
 router.delete("/:_id",async (req,res)=>{
   
    let query = {_id: req.params._id}
    let result = await batches.deleteOne(query)
    res.send(result)
 })
 router.get("/:_id", async (req, res) => { 
    let query = {_id: req.params._id}
    let result = await batches.findOne(query)
    res.send(result)
 })
 router.put ("/:_id",async (req,res)=>{
    let query = {_id:req.params._id}
    let newvalue = {$set : req.body}
    let result = await batches.updateOne(query,newvalue)
    res.send(result)
 });
 

module.exports = router;