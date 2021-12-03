const assert = require("assert");

const part1 = require("./part1");
const part2 = require("./part2");

describe("Day 1", () => {
  describe("Part One", () => {
    it("find the two entries that sum to 2020 and then multiply them together", () => {
      const input = `1721
      979
      366
      299
      675
      1456`;

      assert.strictEqual(part1(input), 514579);
    });
  });

  describe("Part Two", () => {
    it("what is the product of the three entries that sum to 2020", () => {
      const input = `1721
      979
      366
      299
      675
      1456`;

      assert.strictEqual(part2(input), 241861950);
    });
  });
});
