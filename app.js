const express = require('express');

//init 
const app = express();

//Views Location
app.set('views', __dirname +'/views');

// Setting template engine
app.set('view engine' , 'ejs');

//setup mongodb
 const MongoClient = require('mongodb').MongoClient;
 const MongoUrl = "mongodb://localhost:27017/todolist";

//connecting to mongodb
MongoClient.connect(MongoUrl,function(err,db){
	if(err){
		console.log(err);
	}else{
		console.log("Database connected succesfully");
		todos = db.collection("todos");
	}	
});

//Routes
app.get('/',function(req,res){
	res.render("index");
});

app.get('/todos/:id',function(req,res){
	res.render("show");
});

app.post('/todos/add',function(req,res){
	res.redirect('/');
});

app.get('/todos/edit/:id',function(req,res){
	res.render('edit');
});

app.post('/todos/update/:id',function(req,res){
	res.redirect('/');
});

app.get('/todos/delete/:id',function(req,res){
	res.redirect('/');
});





//Running app
app.listen(3000,function(){
	console.log("App running http://localhost:3000");
});