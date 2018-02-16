
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('dataFromParse', function(req, res) {
  console.log(req);
  res.success('Consulta realizada! con contenido: ' + req.params.nombre);
});