const dotenv=require("dotenv");
const express=require ("express");
const app= express();
app.use(express.json());

dotenv.config({path:"./config.env"});


require("./db/conn");

// const User=require('./model/userschema');

app.use(require('./router/auth'));
// app.use(require('./getrequests/empget'));

const PORT=process.env.PORT


const middleware=(req,res,next)=>{
    console.log("hello my middleware");
    next();
}
// app.get("/",(req,res)=>{
//     res.send("home page");
// });

app.get("/emp",(req,res)=>{
    res.send("employee page");
});

app.get("/update",middleware,(req,res)=>{
    res.send("update page");
});


app.get("/register",(req,res)=>{
    res.send("register page");
});

app.listen(PORT,()=>{
    console.log("connection successful")
});