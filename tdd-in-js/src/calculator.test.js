const calculator = require("./calculator");

it("Object Exists", () => {
  // Check that the object exists.
  expect(calculator).toBeDefined();
});

it("Adds 2 numbers", () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(100, 2000)).toBe(2100);
});

it("Subtracts 2 numbers", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.subtract(2, 3)).toBe(-1);
  expect(calculator.subtract(100, 2000)).toBe(-1900);
});

it("Multiplies 2 numbers", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
  expect(calculator.multiply(2, 3)).toBe(6);
  expect(calculator.multiply(100, 2000)).toBe(200000);
});

it("Divides 2 numbers", () => {
  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.divide(2, 3)).toBe(2 / 3);
  expect(calculator.divide(100, 2000)).toBe(1 / 20);
});
