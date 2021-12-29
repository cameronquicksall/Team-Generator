const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //Methods from employee 
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //returns office number
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }

}
module.exports = Manager;