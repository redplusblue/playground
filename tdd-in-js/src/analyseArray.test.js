const analyseArray = require("./analyseArray");

it("Function exists", () => {
  expect(analyseArray).toBeDefined();
});

it("Works with single elements", () => {
  expect(analyseArray([1])).toEqual({ average: 1, min: 1, max: 1, length: 1 });
});

it("Works with multiple elements", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });

  expect(analyseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 100000])).toEqual({
    average: 10004.5,
    min: 1,
    max: 100000,
    length: 10,
  });
});
