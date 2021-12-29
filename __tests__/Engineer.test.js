const Engineer = require("../lib/Engineer");

test("Set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("John", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("John", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("John", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});