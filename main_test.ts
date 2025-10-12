import { assertEquals } from "@std/assert";
import { Fraction } from "main.ts";

Deno.test("Bruch Addition: 1/2 + 1/3 = 5/6", () => {
  const a = new Fraction(1, 2);
  const b = new Fraction(1, 3);
  const result = a.add(b);
  assertEquals(result.toString(), "5/6");
});

Deno.test("Bruch Subtraktion: 3/4 - 1/2 = 1/4", () => {
  const a = new Fraction(3, 4);
  const b = new Fraction(1, 2);
  const result = a.sub(b);
  assertEquals(result.toString(), "1/4");
});

Deno.test("Bruch Multiplikation: 2/5 * 3/4 = 3/10", () => {
  const a = new Fraction(2, 5);
  const b = new Fraction(3, 4);
  const result = a.mult(b);
  assertEquals(result.toString(), "3/10");
});

Deno.test("Bruch Division: 3/5 ÷ 2/3 = 9/10", () => {
  const a = new Fraction(3, 5);
  const b = new Fraction(2, 3);
  const result = a.div(b);
  assertEquals(result.toString(), "9/10");
});

Deno.test("Bruch Vereinfachung: 4/8 = 1/2", () => {
  const a = new Fraction(4, 8);
  assertEquals(a.toString(), "1/2");
});