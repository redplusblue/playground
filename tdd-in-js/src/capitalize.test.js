const capitalize = require("./capitalize");

it("Function Exists", () => {
  // Check that the function exists.
  expect(capitalize).toBeDefined();
});

it("Returns a String", () => {
  // Check that the function always returns a string.
  expect(typeof capitalize("test")).toBe("string");
});

it("Capitalizes the first letter of a string", () => {
  // Check that the function returns the correct string.
  expect(capitalize("test")).toBe("Test");
  // Check that the function returns the correct string even if the string is already capitalized.
  expect(capitalize("Test")).toBe("Test");
});
