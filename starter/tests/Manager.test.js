const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
  describe("Initialization", () => {
    it("Can set office number via constructor argument", () => {
      const testValue = 100;
      const e = new Manager("Foo", 1, "test@test.com", testValue);
      expect(e.officeNumber).toBe(testValue);
    });
  });
});

describe("getRole", () => {
  it('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
  });
});

describe("getOfficeNumber", () => {
  it("Can get office number via getOfficeNumber()", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });
});