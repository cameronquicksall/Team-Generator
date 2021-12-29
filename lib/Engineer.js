const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //Methods from Employee class
        super(name, id, email);
        this.github = github;
    }
    // returns github username
    getGithub() {
        return this.github;
    }
    // method that overrides to return Engineer
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;