const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        //Methods from Employee class
        super(name, id, email);
        this.school = school;
    }
    //returns interns school
    getSchool() {
        return this.school;
    }
    
    getRole() {
        return "Intern";
    }
};

module.exports = Intern;