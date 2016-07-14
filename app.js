var http = require("http");
var Router = require("node-router");

var router = Router();
var route = router.push;



route("GET","/uno", function(req, res){
	console.log("llamada al /uno");
	res.send("Hola Mundo uno");
});

route("GET","/dos", function(req, res){
	console.log("llamada al /dos");
	res.send("Hola Mundo uno dos");
});
 
var server = http.createServer(router);
server.listen(8000, function(){
	console.log("server ok")
});