CREATE DATABASE Bamazon_DB;

USE Bamazon_DB;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price FLOAT(11) NOT NULL,
  stock_quantity INT(11) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Echo Dot", "Electronic", 49.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Contigo AutoSeal Travel Mug", "Kitchen", 10.78, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Surge Protector", "Electronic", 21.59, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Anker Wireless Charger", "Electronic", 9.99, 89);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop Sleve", "Electronic",10.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Garmin Nuvi GPS", "Electronic", 79.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Costzon 8-Piece Nonstick Cookware Set", "Kitchen", 29.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Crock-Pot 7-Quart Oval Manual Slow Cooker", "Kitchen", 17.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fujifilm Instax Mini 9 Instant Camera", "Electronic", 69.95, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dolica AX620B100 62-Inch Proline Tripod and Ball Head", "Electronic", 49.99, 35);
