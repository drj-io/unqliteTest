var unqlite = require('unqlite');

var db = new unqlite.Database('test.db');
db.open(unqlite.OPEN_CREATE, function(err){
  if(err) throw err;
  db.store('example key2', 'example value', function(err, key, value){
    // db.close(function(err){// commit change to the database
      db.fetch("example key", function(err,key, value){
        console.log(err,key,value)
      })
    // });
  });
});
