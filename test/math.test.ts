import { sum } from "../src/math";

test("Deve somar 2 + 2", function () {
  expect(sum(2, 2)).toBe(4);
});
