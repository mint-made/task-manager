const {
  calcTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} = require('../src/math');

test('should calculate total with tip', () => {
  const total = calcTip(10, 0.3);

  expect(total).toBe(13);
});

test('should calculate total with default tip', () => {
  const total = calcTip(10);
  expect(total).toBe(12.5);
});

test('should convert 32 F to 0 C', () => {
  const degreesC = fahrenheitToCelsius(32);
  expect(degreesC).toBe(0);
});

test('Should convert 0 C to 32 F', () => {
  const degreesF = celsiusToFahrenheit(0);
  expect(degreesF).toBe(32);
});

test('Async test demo', (done) => {
  setTimeout(() => {
    expect(1).toBe(1);
    done();
  }, 2000);
});
