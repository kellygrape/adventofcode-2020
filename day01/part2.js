module.exports = (input) => {
  const items = input.split("\n").map((t) => +t);
  let answer = 0;
  for (let i = 0; i < items.length; i++) {
    if (!items[i + 1]) break;
    const current = items[i];

    for (let k = i; k < items.length; k++) {
      const next = items[k];
      for (let j = i + 1; j < items.length; j++) {
        if (current + next + items[j] === 2020) {
          answer = current * next * items[j];
          break;
        }
      }
      if (answer !== 0) break;
    }
    if (answer !== 0) break;
  }

  return answer;
};
