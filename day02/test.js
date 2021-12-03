const assert = require("assert");

const part1 = require("./part1");
const part2 = require("./part2");

describe("Day 1", () => {
  describe("Part One", () => {
    it("gets the answer", () => {
      const input = `1-3 a: abcde
      1-3 b: cdefg
      2-9 c: ccccccccc`;

      assert.strictEqual(part1(input), 2);
    });
  });

  describe("Part Two", () => {
    it("has one valid password", () => {
      const input = `1-3 a: abcde
      1-3 b: cdefg
      2-9 c: ccccccccc
      12-15 q: qqqqqqqqqqqvqqqq
      1-5 q: qqqqvqqq`;

      assert.strictEqual(part2(input), 3);
    });
  });
});
