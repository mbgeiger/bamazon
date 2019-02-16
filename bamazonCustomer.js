var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Mullet123",
    database: "bamazon_db"
  });

  // connect to the mysql server and display list of items availible
connection.connect(function(err) {
    if (err) throw err;
    console.log ("Successful Connection!");
    connection.query("SELECT * FROM products", function (err, result) {
      if (err) throw err;
      console.log(result);
      buy();

    });
      
  });

 function buy(){
   inquirer.prompt([
     {
       name: "item_ID",
       type: "input",
       message: "Please select your item ID"
     },
     {
       name: "stock_quantity",
       type: "input",
       message: "Please select the quantity"
     },
   ]).then(function(answer){
    var ID = answer.ID;
    var quantity = answer.quantity;
    purchased(ID, quantity);
   });
 };
  
 //check db for quantity available