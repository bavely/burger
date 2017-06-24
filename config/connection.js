
var mysql = require('mysql');
if(process.env.JAWDB_URL){
  var connection = mysql.createConnection(process.env.JAWDB_URL);
}
else{
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});
};
connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;