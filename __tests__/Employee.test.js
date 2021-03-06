const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "John";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("John", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("John", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Get name with getName()", () => {
    const testValue = "John";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Get id with getId()", () => {
    const testValue = 100;
    const e = new Employee("John", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("John", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("John", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});