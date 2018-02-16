
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('dataFromParse', function(req, res) {
  res.status(200).json(req);
});