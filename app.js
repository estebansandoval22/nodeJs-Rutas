var http = require("http");
var server = http.createServer();
var Router = require("node-router");

var router = Router();
var route = router.push;



route("GET","/", function(req, res){
	console.log("llamada al /");
	res.simpleText(200,"Hola Mundo rutas");
});

route("GET","/hola", function(req, res){
	console.log("llamada al /hola");
	res, simpleText(500,"Error");
});


server.listen(8000, function(){
	console.log("server ok")
});