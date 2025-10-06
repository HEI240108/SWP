import { assertEquals } from "@std/assert";
import { add, mult, div, sub, sqr } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test(function multTest() {
  assertEquals(mult(2, 3), 6);
});

Deno.test(function divTest() {
  assertEquals(div(6, 3), 2);
});

Deno.test(function subTest() {
  assertEquals(sub(5, 3), 2);
});

Deno.test(function sqrTest() {
  assertEquals(sqr(9), 3);
});

