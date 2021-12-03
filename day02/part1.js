module.exports = (input) => {
  let answer = 0;
  input.split("\n").forEach((item) => {
    const regex = /(\d+)-(\d+) ([a-z]): ([a-z]+)/;
    const m = regex.exec(item);
    const lowerBound = m[1];
    const upperBound = m[2];
    const password = m[4];

    let count = password.split(m[3]).length - 1;
    if (lowerBound <= count && count <= upperBound) {
      answer++;
    }
  });
  console.log(answer);

  return answer;
};
