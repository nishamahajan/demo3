var express=require("express");
var app=express();

var studentController=function(req,res)
{
  console.log("student list is:");
  var student=[
    {id:1,name:"nisha",age:23,grades:"A"},
     {id:2,name:"cheeku",age:30,grades:"A"},
	  {id:3,name:"virat",age:29,grades:"A"},
	   {id:4,name:"anushka",age:28,grades:"B"}
  
  ];
res.send(student);


};
app.get('/student',studentController);

var server=app.listen(8085,function()
{
var host=server.address().address
var port=server.address().port
console.log("server is listennig on port no 8085",host,port);




})