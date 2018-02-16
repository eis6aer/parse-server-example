
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
      res.success(sum / results);
    })
    .catch(() =>  {
      res.error("movie lookup failed");
    });
});

Parse.Cloud.define('setStates', function (req,res) {
  var State = Parse.Object.extend('States');
  var s = new State();
  s.set("nombre","Aguascalientes");
  s.save(null, {
     success: function(state) {
       // Execute any logic that should take place after the object is saved.
       alert('New object created with objectId: ' + state.nombre);
     },
     error: function(state, error) {
       // Execute any logic that should take place if the save fails.
       // error is a Parse.Error with an error code and message.
       alert('Failed to create new object, with error code: ' + error.message);
     }
   });
  res.success("Saved!!");
});
