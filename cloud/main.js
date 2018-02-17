
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('dataFromParse', function(req, res) {
  console.log(req);
  res.success('Consulta realizada! con contenido: ' + req.params.nombre);
});


Parse.Cloud.define('getStates', function(req, res) {
  const query = new Parse.Query("States");
  var queryState = req.params.state;

  if (queryState != null)
    query.equalTo("nombre", queryState);

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
  if (req.params.state != null)
  {
    s.set("nombre",req.params.state);
    s.save(null, {
       success: function(insertedState) {
         console.log(insertedState);
         // Execute any logic that should take place after the object is saved.
         res.success('Estado creado: ' + insertedState.get('nombre'));
       },
       error: function(state, error) {
         // Execute any logic that should take place if the save fails.
         // error is a Parse.Error with an error code and message.
         res.success('Error (' + error.message + ')');
       }
     });
  } else {
    res.success('No data');
  }

});
