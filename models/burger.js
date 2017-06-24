var orm = require("../config/orm.js");

var burgerselector = {

    insert: function(value, cB){
        orm.insertOne(value, function(res){
            cB(res);
        });
    },
    select: function(cB){
        orm.selectAll(function(res){
            cB(res);
        });

    },
    update: function(value, ID, cB){

        orm.updateOne(value, ID, function(res){
            cB(res);
        });

    }
}




module.exports = burgerselector;