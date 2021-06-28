const getGreeting, add = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('can we add 2 numbers together', () => {
  expect(add(1, 2)).toBe(3);
});

