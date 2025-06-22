const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/user").
then(function(){
    console.log("Database Connected...")
})
.catch(function(){
    console.log("Failed to connect with Database...")
})

const loginSchema = new mongoose.Schema({
  email: String,
  pass: String
});
const newlogin = mongoose.model("Login", loginSchema, "login");

app.get("/loginuser",function(req,res){
   newlogin.find().then(function(retdata){
    console.log(retdata)
    res.send(retdata)
   })
})


app.post('/adduser', (req, res) => {
   const newuser = req.body.newuser;
   const newpass = req.body.newpass;
    const newdata = new newlogin(
        {
            email:newuser,
            pass:newpass
        }
    )

    console.log("New user:", newuser, "Password:", newpass);

    res.status(200).json({ message: "User registered successfully" });

    newdata.save().then(()=>console.log("Saved Successfully"))

});



app.listen(5000,function(){
    console.log("Server Started...")
})