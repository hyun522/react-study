const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => {
  const result = a / b;
  return parseFloat(result.toFixed(2));
};

export { add, subtract, multiply, divide };
