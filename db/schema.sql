CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT(10) AUTO_INCREMENT NOT null,
    burger_name VARCHAR(50) NOT null,
    devoured BOOLEAN NOT null,
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

