
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('dataFromParse', function(req, res) {
  console.log(req);
  res.success('Consulta realizada! con contenido: ' + req.params.nombre);
});


Parse.Cloud.define('getStates', function(req, res) {
  const query = new Parse.Query("Review");
  //query.equalTo("movie", request.params.movie);
  query.find()
    .then((results) => {
      response.success(sum / results);
    })
    .catch(() =>  {
      response.error("movie lookup failed");
    });
});

Parse.Cloud.define('setStates', function (req,res) {
  var state = Parse.Object.extend('States');
  state.set("Nombre","Aguascalientes");
  state.save(null, {useMasterKey = true});
});
