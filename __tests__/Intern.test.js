const Intern = require("../lib/Intern");

test("Set school with constructor", () => {
    const testValue = "SMU";
    const e = new Intern("Cameron", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return Intern", () => {
    const testValue = "Intern";
    const e = new Intern("SMU", 1, "test@test.com", "SMU");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "SMU";
    const e = new Intern("Cameron", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});