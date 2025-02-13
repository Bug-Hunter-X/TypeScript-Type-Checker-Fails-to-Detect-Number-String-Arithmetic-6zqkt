function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // Type checking passes
let result2 = subtract(10, 5); // Type checking passes

let result3 = add(5, "3"); // Type checking fails. Should throw error, but it doesn't
let result4 = subtract(10, "5");  // Type checking fails. Should throw error, but it doesn't

console.log(result1, result2, result3, result4);