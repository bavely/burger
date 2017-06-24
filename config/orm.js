var mysql = require('./connection.js');

var ORM = {

selectAll: function(cB){
    mysql.query("SELECT * FROM burgers;", function(err, data) {
        if (err) throw err;
        cB(data);
    });
},

insertOne: function(value, cB){

  mysql.query("INSERT INTO burgers SET ?", {burger_name:value}, function(err, result) {
    if (err) throw err;
    cB(result);
  });

},


updateOne: function(value, ID, cB){


  mysql.query("UPDATE burgers SET devoured = ? WHERE id = ?",[value,ID], function (err, result) {
    if (err) throw err;
    cB(result);
  });

}

}


module.exports = ORM;



