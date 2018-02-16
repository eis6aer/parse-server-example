
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('dataFromParse', function(req, res) {
  console.log(req);
  res.success('Consulta realizada! con contenido: ' + req.params.nombre);
});


Parse.Cloud.define('getStates', function(req, res) {
  const query = new Parse.Query("States");
  //query.equalTo("movie", request.params.movie);
  query.find()
    .then((results) => {
      res.success(results);
    })
    .catch(() =>  {
      res.error("states lookup failed");
    });
});

Parse.Cloud.define('setStates', function (req,res) {
  var State = Parse.Object.extend('States');
  var s = new State();
  if (res.params.state != null)
  {
    s.set("nombre",res.params.state);
    s.save(null, {
       success: function(state) {
         // Execute any logic that should take place after the object is saved.
         res.success('New object created with objectId: ' + state.nombre);
       },
       error: function(state, error) {
         // Execute any logic that should take place if the save fails.
         // error is a Parse.Error with an error code and message.
         res.success('Failed with message: ' + error.message);
       }
     });
  } else {
    res.success('No data');
  }

});
