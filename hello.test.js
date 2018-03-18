const hello = require("./hello");

test("Greets user.", () => {
  expect(hello()).toBe("Hello world!");
});

test("Greets specific user.", () => {
  expect(hello("Molly Jean")).toBe("Hello Molly Jean!");
});
