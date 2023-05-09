const reverseString = require("./reverseString");

it("Function Exists", () => {
  // Check that the function exists.
  expect(reverseString).toBeDefined();
});

it("Returns a String", () => {
  // Check that the function always returns a string.
  expect(typeof reverseString("test")).toBe("string");
});

it("Reverses Given String", () => {
  // Check that the function returns the correct string.
  expect(reverseString("test")).toBe("tset");
  // Check that the function returns the correct string if the string has multiple words.
  expect(reverseString("test test")).toBe("tset tset");
});
