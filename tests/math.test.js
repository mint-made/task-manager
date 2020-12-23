const { calcTip } = require('../src/math');

test('should calculate total with tip', () => {
  const total = calcTip(10, 0.3);

  expect(total).toBe(13);
});

test('should calculate total with default tip', () => {
  const total = calcTip(10);
  expect(total).toBe(12.5);
});
