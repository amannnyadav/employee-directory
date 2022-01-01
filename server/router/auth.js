const express=require("express");
const router=express.Router();
require("../db/conn");
const User=require("../model/userschema");


// router.post("/register",  (req,res)=>{
//     const {name,contact,email,designation,department}=req.body;
//     if (!name || !contact || !email || !designation || !department){
//         return res.status(422).json({error:"plz fill the field properly"});
//     }
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if (userExist){
//             return res.status(422).json({error:"email already exists"});
//         }

//         const user=new User({name,contact,email,designation,department});
//         user.save().then(()=>{
//             res.status(201).json({message:'user registered successfully'});
//         }).catch((err)=> res.status(500).json({error:"failed to registered"}));
//     }).catch(err =>{console.log(err);});
    
// });

//async=await
router.post("/registers", async (req,res)=>{
    const {Name,Contact,Email,Designation,Department}=req.body;
    if (!Name || !Contact || !Email || !Designation || !Department){
        return res.status(422).json({error:"plz fill the field properly"});
    }
    try{
        const userExist=await User.findOne({Email:Email});
        if (userExist){
            return res.status(422).json({error:"Email already exist"});
        }
        const user=new User({Name,Contact,Email,Designation,Department});
        await user.save();
        res.status(201).json({message:'user registered successfully'});
    }
    catch(error){
        console.log(error);
    }
});

router.get("/employee", async (req,res)=>{
    res.send("hello world");
})

module.exports=router;