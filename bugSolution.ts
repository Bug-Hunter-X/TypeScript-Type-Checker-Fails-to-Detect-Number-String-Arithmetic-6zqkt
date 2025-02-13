function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return String(a) + String(b); // Handle string concatenation
  }
}

function subtractSafe(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else {
    return "Incompatible types"; // Handle the error appropriately
  }
}

let result1 = add(5, 3); // Type checking passes
let result2 = subtract(10, 5); // Type checking passes

let result3 = addSafe(5, "3"); // Type checking passes; returns string
let result4 = subtractSafe(10, "5"); // Type checking passes; returns "Incompatible types"

console.log(result1, result2, result3, result4); 