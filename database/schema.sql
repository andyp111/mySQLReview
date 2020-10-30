DROP DATABASE IF EXISTS foodDB;

CREATE DATABASE foodDB;

USE foodDB;

CREATE TABLE food (
  id int auto_increment not null primary key,
  name varchar(255) not null,
  price int not null,
  rating int not null
);