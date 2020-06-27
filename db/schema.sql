CREATE DATABASE burger_db;

USE burger_db;
DROP DATABASE burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Standard Burger', false);