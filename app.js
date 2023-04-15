const express = require("express");
const bodyParser=require("body-parser");

const app=express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var Items=['welcome'];
app.get("/",function(req,res){
    // res.send("hello");
    var today=new Date();
    // var currentDay=today.getDay();
    // var days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    
    var day= today.toLocaleDateString("en-US",options);
    
    // res.render("list",{din:days[currentDay]});
    res.render("list",{din:day, newitem:Items});
})


app.post("/",function(req,res){
    var Item=req.body.item;
    if(Item!=""){
    Items.push(Item);
    }
    // console.log(Item);
    res.redirect("/");
})
app.listen(3000,function(){
    
})

