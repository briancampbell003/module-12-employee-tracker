 USE organization_db;

INSERT INTO depts (deptname)
VALUES 
    ("Accounting"),
    ("Legal"),
    ("Operations"),
    ("Sales"),
    ("Customer Service");

INSERT INTO roles (title, salary, dept_id)
VALUES 
    ("Lead Accountant", 34000, 1),
    ("Attorney", 95000, 2),
    ("Paralegal", 31000, 2),
    ("Regional Director", 80000, 3),
    ("Sales Rep", 52000, 4),
    ("Call Center Agent", 4400, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ("Larry", "Numbers", 1, null),
    ("Laura", "Litigatsky", 2, null),
    ("Paige", "Paralawzer", 3, 3),
    ("Ricky", "Regionsmith", 4, null),
    ("Samuel", "Sellsit", 5, 4),
    ("Chris", "Custservino", 6, 4);