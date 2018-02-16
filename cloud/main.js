
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('dataFromParse', function(req, res) {
	console.log(req);
  res.status(200).send('Consulta realizada!');
});