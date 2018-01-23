const express = require('express');

//init 
const app = express();

//Routes
app.get('/',function(req,res){
	res.send("Index Page");
});


//Running app
app.listen(3000,function(){
	console.log("App running http://localhost:3000");
});