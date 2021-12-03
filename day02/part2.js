module.exports = (input) => {
  let answer = 0;
  input.split("\n").forEach((item) => {
    const regex = /(\d+)-(\d+) ([a-z]): ([a-z]+)/;
    const m = regex.exec(item);
    const lowerBound = +m[1] - 1;
    const upperBound = +m[2] - 1;
    const password = m[4];

    let charAtLower = password.charAt(lowerBound);
    let charAtUpper = password.charAt(upperBound);

    if (charAtLower === charAtUpper) return;
    if (charAtLower === m[3] || charAtUpper === m[3]) {
      answer++;
    }
  });

  return answer;
};
