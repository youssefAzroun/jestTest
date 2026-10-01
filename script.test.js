const { toUpperCase } = require("./script");

test("converts text to uppercase", () => {
  expect(toUpperCase("hello world")).toBe("HELLO WORLD");
});
