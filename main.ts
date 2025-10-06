export function add(a: number, b: number): number {
  return a + b;
}

export function mult(a: number, b: number): number {
  return a * b;
}

export function div(a: number, b: number): number {
  return a / b;
}
export function sub(a: number, b: number): number {
  return a - b;
}
export function sqr(a: number): number {
  return Math.sqrt(9);
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
