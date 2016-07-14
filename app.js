var server = require("node-router").getServer();

server.get("/", function(req, res){
	res, simpleText(200,"Hola Mundo rutas");
});

server.get("/hola", function(req,res){
	res, simpleText(500,"Error");
});



server.listem(8000, function(){
	console.log("server ok")
});