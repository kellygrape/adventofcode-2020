module.exports = (input) => {
  let answer = 0;
  let lines = input.split("\n").map((t) => t.trim());
  let pos1 = 0,
    ans1 = 0; // right 1 down 1
  let pos2 = 0,
    ans2 = 0; // right 3 down 1
  let pos3 = 0,
    ans3 = 0; // right 5 down 1
  let pos4 = 0,
    ans4 = 0; // right 7 down 1
  let pos5 = 0,
    ans5 = 0; // right 1 down 2
  lines.forEach((line, i) => {
    if (line.charAt(pos1) === "#") ans1++;
    if (line.charAt(pos2) === "#") ans2++;
    if (line.charAt(pos3) === "#") ans3++;
    if (line.charAt(pos4) === "#") ans4++;
    if (i % 2 === 0) {
      if (line.charAt(pos5) === "#") ans5++;
      pos5 = (pos5 + 1) % line.length;
    }
    pos1 = (pos1 + 1) % line.length;
    pos2 = (pos2 + 3) % line.length;
    pos3 = (pos3 + 5) % line.length;
    pos4 = (pos4 + 7) % line.length;
  });

  return ans1 * ans2 * ans3 * ans4 * ans5;
};
