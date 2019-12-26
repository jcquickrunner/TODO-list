const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    
   let today = new Date();
   let currentDay =today.getDay();
   let day="";
   switch (currentDay) {
       case 0:
           day="Sunday";
           
           break;
           case 1:
           day="Monday";
           
           break;
           case 2:
           day="Tuesday";
           
           break;
           case 3:
           day="Wednesday";
           
           break;
           case 4:
           day="Thursday";
           
           break;
           case 5:
           day="Friday";
           
           break;
           case 6:
           day="Saturday";
           
           break;
   
       default:
           console.log("error:current day is equal to "+ currentDay);
   }
    res.render("list",{kindOfDay:day}) //list is the name of the ejs file i am using 
});

app.listen(3000, function () {
    console.log("server started on port 3000");
});

//res.write can be used to send multpl pieces of data because res.send is about a catch all simlart to else in a function.