const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let items = []  //an array and not a variable bevause by submiting you are re assighning the item variable with a new item

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function (req, res) { //this again because this is triggered whenever home route is accessed
    
   let today = new Date();
   let options ={
       weekday: "long",
       day:"numeric",
       month:"long"
   };
 
  var day = today.toLocaleDateString("en-US", options)
    res.render("list",{kindOfDay:day, newListItems:items}) //list is the name of the ejs file i am using 
});

app.listen(3000, function () {
    console.log("server started on port 3000");
});
app.post("/",function(req,res){
    let item = req.body.newItem;
items.push(item);
res.redirect("/"); //this triggers (see line 5)  basically this just refreshed the page to show the new list item
console.log("submit went through")
})
//res.write can be used to send multpl pieces of data because res.send is about a catch all simlart to else in a function.