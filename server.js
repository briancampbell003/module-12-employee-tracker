// Require packages
const inquirer = require('inquirer');
const consTable = require('console.table');
const mysql = require('mysql2');
// Require classes
const Dept = require('./lib/Dept.js');
const Role = require('./lib/Role.js');
const Employee = require('./lib/Employee.js');

// Establish a connection to the SQL databse
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'sql_P4SS_0363',
      database: 'organization_db'
    },
    console.log(`Connected to the organization_db database.`)
);

//   I DONT THINK ILL USE THESE EMPTY ARRAYS
let myDepts = [];
let myRoles = [];
let myEmployees = [];

mainMenu();

// Main Menu to choose to an action
function mainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Select an action',
                name: 'mainMenu',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add department', 'Add role', 'Add employee', 'Exit']
            }
        ])
        .then(response => {
            switch (response.mainMenu) {
                case 'View all departments':
                    viewDepts();
                    break;

                case 'View all roles':
                    viewRoles();
                    break;

                case 'View all employees':
                    viewEmployees();
                    break;

                case 'Add department':
                    addDept();
                    break;

                case 'Add role':
                    addRole();
                    break;

                case 'Add employee':
                    addEmployee();
                    break;

                case 'Exit':
                    exit();

                default:
                    break;
            }
        })
}

// View all functions for departments, roles, employees
function viewDepts() {
    db.query('SELECT * FROM depts', function (err, results) {
        console.table(results);
        mainMenu();
      });
}
function viewRoles() {
    db.query('SELECT * FROM roles', function (err, results) {
        console.table(results);
        mainMenu();
      });
}
function viewEmployees() {
    db.query('SELECT * FROM employees', function (err, results) {
        console.table(results);
        mainMenu();
      });
}


// Add department, query database to insert record, then return to Main Menu
function addDept() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter the name of the department",
                name: 'deptName',
            }
        ])
        .then(response => {
            let { deptName } = response;
            // let dept = new Dept(deptName);
            let sql = `INSERT INTO depts (deptname) VALUES ("${deptName}")`;
            db.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
              });
            mainMenu();
        })
}

// Add role, query database to insert record, then return to Main Menu
function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter the name of the new role",
                name: 'roleName',
            },
            {
                type: 'input',
                message: "Enter the salary for the new role",
                name: 'roleSalary',
            },
            {
                type: 'input',
                message: "Enter the department id for the new role",
                name: 'roleDept',
            }
        ])
        .then(response => {
            let { roleName, roleSalary, roleDept } = response;
            // let role = new Role(roleName, roleSalary, roleDept);
            let sql = `INSERT INTO roles (title, salary, dept_id) VALUES ("${roleName}", "${roleSalary}", ${roleDept})`;
            db.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
              });
            // myRoles.push(role);
            mainMenu();
        })
}

// Add employee, query database to insert record, then return to Main Menu
function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter the first name of the new employee",
                name: 'empFirstName',
            },
            {
                type: 'input',
                message: "Enter the first name of the new employee",
                name: 'empLastName',
            },
            {
                type: 'input',
                message: "Enter the new employee's role id",
                name: 'empRole',
            },
            {
                type: 'input',
                message: "Enter the new employee's manager id",
                name: 'empManager',
            }
        ])
        .then(response => {
            let { empFirstName, empLastName, empRole, empManager } = response;
            let sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${empFirstName}", "${empLastName}", ${empRole}, ${empManager})`;
            db.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
              });
            // let employee = new Employee(empFirstName, empLastName, empRole, empManager);
            // myEmployees.push(employee);
            mainMenu();
        })
}
