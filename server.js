var http = require("http");

function iniciar() {
  function onRequest(request,response){
    console.log("Peticion Recibida");
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write("texto de prueba");
    response.end();
  }

  http.createServer(onRequest).listen(8888);

  console.log("Servidor Iniciado");
}
exports.iniciar = iniciar;
