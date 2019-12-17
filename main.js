var bodyParser = require("body-parser"),
	express = require("express"),
	app = express(),
	path=require('path'),
	methodOverride = require("method-override");

//APP CONFIG

app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));


//--------------ROUTES-----------------------
app.get("/",function(req,res){
	res.render("landing");
});



app.get("/education",function(req,res){
	res.render("education");
})

app.get("/workex",function(req,res){
	res.render("workex")
})

app.get("/skills",function(req,res){
	res.render("skills")
})


//LISTEN

app.listen(process.env.PORT||3000,function(){
	console.log("&&&&&&&&&&&&  SERVER HAS STARTED &&&&&&&&&&&&"+process.env.PORT);
});

