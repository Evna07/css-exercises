const score = (x, y) => {
  const result = x * x + y * y;
  console.log(result);
  if (result <= 1) {
    return 10;
  } else if (result <= 25) {
    return 5;
  } else if (result <= 100) {
    return 1;
  } else return 0;
};
// >10 0pts, 9>x>5 1pts, 5>x>1 5pts, <1 10pts
console.log(score(10, 0));
