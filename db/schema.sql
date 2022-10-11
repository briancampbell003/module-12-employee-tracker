-- Active: 1664495632750@@127.0.0.1@3306@organization_db
DROP DATABASE IF EXISTS organization_db;
CREATE DATABASE organization_db;

USE organization_db;

CREATE TABLE depts (
  deptid INT NOT NULL AUTO_INCREMENT,
  deptname VARCHAR(30) NOT NULL,
  PRIMARY KEY (deptid)
);

CREATE TABLE roles (
  roleid INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(15,2) NOT NULL,
  dept_id INT,
  PRIMARY KEY (roleid),
  FOREIGN KEY (dept_id)
  REFERENCES depts(deptid)
  ON DELETE SET NULL
);

CREATE TABLE employees (
  employeeid INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (employeeid),
  FOREIGN KEY (role_id)
  REFERENCES roles(roleid)
  ON DELETE SET NULL
);
