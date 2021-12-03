const assert = require("assert");

const part1 = require("./part1");
const part2 = require("./part2");
const testinput = `..##.......
      #...#...#..
      .#....#..#.
      ..#.#...#.#
      .#...##..#.
      ..#.##.....
      .#.#.#....#
      .#........#
      #.##...#...
      #...##....#
      .#..#...#.#`;
describe("Day 3", () => {
  it("should have the correct answer for part 1", () => {
    assert.strictEqual(part1(testinput), 7);
  });
  it("should have the correct answer for part 2", () => {
    assert.strictEqual(part2(testinput), 336);
  });
});
