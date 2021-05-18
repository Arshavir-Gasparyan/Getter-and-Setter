let getBestStudent = function (obj) {
  let average = 0;
  let bestStudent = "";
  for (let key in obj) {
    let sum = obj[key].reduce((acc, curr) => {
      return acc + curr;
    });
    if (sum / obj[key].length > average) {
      average = sum / obj[key].length;
      bestStudent = key;
    }
  }
  return bestStudent;
};
console.log(
  getBestStudent({
    John: [200, 90, 80],
    Bob: [100, 100, 80],
  })
);
