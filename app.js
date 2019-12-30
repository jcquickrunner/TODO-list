const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let items = []  //an array and not a variable bevause by submiting you are re assighning the item variable with a new item
let workItems =[]
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function (req, res) { //this again because this is triggered whenever home route is accessed
    
   let today = new Date();
   let options ={
       weekday: "long",
       day:"numeric",
       month:"long"
   };
 
  var day = today.toLocaleDateString("en-US", options)
    res.render("list",{listTitle:day, newListItems:items}) //list is the name of the ejs file i am using 
});

app.listen(3000, function () {
    console.log("server started on port 3000");
});
app.post("/",function(req,res){

    let item = req.body.newItem;

    if (req.body.list=== "work"){
        workItems.push(item);
        res.redirect("/work");
        console.log(req.body)
    } else {
        items.push(item);
        res.redirect("/");
    }
   


});
app.get("/work",function(req, res){
    res.render("list",{listTitle:"Work List", newListItems:workItems})
})// once acessing the work route get the list ejs file but instead of putting the day variable put the string work list
app.post("/work", function (req,res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});
//res.write can be used to send multpl pieces of data because res.send is about a catch all simlart to else in a function.