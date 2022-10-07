class Role {
    constructor(name, salary, dept) {
        this.name = name;
        this.salary = salary;
        this.dept = dept
    }

    getName() {
        return this.name;
    }

    getSalary() {
        return this.salary;
    }

    getDept() {
        return this.dept;
    }
}

module.exports = Role;