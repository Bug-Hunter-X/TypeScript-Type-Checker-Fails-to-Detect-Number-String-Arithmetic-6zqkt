# TypeScript Type Checker Bug: Number/String Arithmetic

This repository demonstrates a bug in TypeScript's type checking system where it fails to detect errors when performing arithmetic operations (+, -) between numbers and strings. The expected behavior is that the compiler should throw an error, preventing incompatible type operations. Instead, it allows the code to compile, resulting in unexpected string concatenation at runtime.

## Steps to Reproduce

1. Clone the repository.
2. Compile the TypeScript code using `tsc bug.ts`.
3. Run the JavaScript output.

Observe that the code compiles without error but produces unexpected results due to implicit type coercion.

## Solution

The solution involves more rigorous type checking using union types or type guards to ensure that arithmetic operations are only performed with numbers. See the `bugSolution.ts` file for a fix.