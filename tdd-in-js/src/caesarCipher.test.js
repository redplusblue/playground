const caesarCipher = require("./caesarCipher");

it("Function Exists", () => {
  expect(caesarCipher).toBeDefined();
});

it("Works with single letters", () => {
  expect(caesarCipher("A", 1)).toBe("B");
  expect(caesarCipher("z", 1)).toBe("a");
});

it("Works with words", () => {
  expect(caesarCipher("Aaa", 1)).toBe("Bbb");
  expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
  expect(caesarCipher("Test", 1)).toBe("Uftu");
});
