var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")



router.get("/", function(req, res) {

burger.select(function(data){
   var getdata = {
     burgers:data
   };
   console.log(getdata);
       res.render("index", getdata);
});
  });


router.post("/", function(req,res){
burger.insert(req.body.newBur,function(){
  res.redirect("/");
});

});


router.put("/:id", function(req,res){
if (req.body.devoured === "true"){
   req.body.devoured = true;
   }else{req.body.devoured= false}
   console.log(req.body.devoured, req.params.id)
burger.update(req.body.devoured,req.params.id,function(){
  res.redirect("/");
   console.log("-----------------------------------------------------------------------")
});

});

module.exports = router;
