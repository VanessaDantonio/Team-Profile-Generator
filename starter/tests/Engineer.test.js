const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("Can set GitHUb account via constructor", () => {
      const testValue = "GitHubUser";
      const e = new Engineer("Foo", 1, "test@test.com", testValue);
      expect(e.github).toBe(testValue);
    });
  });
});

describe("getRole", () => {
  it("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
  });
});

describe("getGithub", () => {
  it("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });
});