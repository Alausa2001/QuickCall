-- create database and the user

SET GLOBAL validate_password.policy=LOW;
CREATE DATABASE IF NOT EXISTS quickcall_db;
CREATE USER IF NOT EXISTS 'quickcall'@'localhost' IDENTIFIED BY 'quickcall_v1.0';
GRANT ALL PRIVILEGES ON quickcall_db.* TO 'quickcall'@'localhost';
GRANT SELECT ON performance_schema.* TO 'quickcall'@'localhost';
FLUSH PRIVILEGES;
