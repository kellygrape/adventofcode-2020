module.exports = (input) => {
  let answer = 0;
  let lines = input.split("\n").map((t) => t.trim());
  let position = 0;
  lines.forEach((line, i) => {
    if (line.charAt(position) === "#") answer++;
    position = (position + 3) % line.length;
  });

  return answer;
};
