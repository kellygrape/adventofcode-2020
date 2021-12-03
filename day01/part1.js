module.exports = (input) => {
  const measurements = input.split("\n").map((t) => +t);
  let answer = 0;
  for (let i = 0; i < measurements.length; i++) {
    if (!measurements[i + 1]) break;
    const current = measurements[i];

    for (let k = i; k < measurements.length; k++) {
      if (current + measurements[k] === 2020) {
        answer = current * measurements[k];
        break;
      }
    }
    if (answer !== 0) break;
  }

  return answer;
};
