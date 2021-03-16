var serverinfo = require("./serverinfo");
var mysql = require('mysql') //require includes things & to use stuff from package = save it to a variable
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : serverinfo.password,
    database : 'grocery_stores'
  });
   
module.exports = function(app, db) {  
    //whatever comes after ":" it takes as input which is saved into next lines
    app.post('/search/:item', (req, res) => {
        var item = req.params.item.replace("-"," "); //on search.js folder do the opposite(" ","-")
        // You'll create your note here. 
        connection.connect();
        connection.query(`SELECT * FROM food_items WHERE \`Name of item\` LIKE "%${item}%"`, function (error, results, fields) {
            if (error) throw error;
            res.send(results);

        }); 
 
        connection.end();   
    });
    app.post('/app', (req,res) => {
        res.send('Grocery Story')
    });
};
//creates the special links to diff. parts of backend

