// Create the variables to run the application
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table')

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "Bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  showTable();
});

var table = new Table({
  head: ['Item_Id', 'Product_Name', 'Department_name', 'Price', 'Stock_Quantity'],
  colWidths: [10, 50, 20, 20, 20]
});

//Create the function to display the items available for sale
// Include the ID's, names and prices
var showTable = function(){
  connection.query("SELECT * FROM products",function(err, res){
    if(err) throw err;
      for(var i=0; i<res.length; i++){
        table.push(
          [res[i].item_id, res[i].product_name, res[i].department_name,"$" + res[i].price, res[i].stock_quantity]
        );
      }
      console.log(table.toString());
      getAction();
  });

};

// Function to get the action of the user to see if he want to buy or quit the app
var getAction = function(){
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: ['Buy an Item', 'Quit']
  }).then(function(answer){
    switch (answer.action) {
      case "Buy an Item":
          console.log("buy an item");
          buyFunction();
        break;
      case "Quit":
      connection.end(function(err) {
        // The connection is terminated now
        console.log("Thanks for your buy.");
      });

        break;
      default:

    }
  })
};
// Function to let the user to buy an item
var buyFunction = function(){
  inquirer.prompt({
    name: "buy",
    type: "input",
    message: "What's the id of the item that you like? "
  }).then(function(answer){
    var queryString = "SELECT * FROM products WHERE item_id = "+ answer.buy;
    console.log(queryString);
    connection.query(queryString , function(err, res){
        if(err) throw err;
        console.log(res);


    });
  })
}





// Prompt the user two messages
// ask for the id they would like to buy
// how many units they want to buy


// When the customer placed the order your application should check if your store has enough of the products
// to meet the customer request

// If not it should log a phrase like Insufficient quantity!, and prevent from going through

// If the store has enough product, you should fullfill the customer order
  //Update the SQL database to reflect the remaining quantity
  // Show the customer the total cost of their purchase
