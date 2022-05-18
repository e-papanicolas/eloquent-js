function every(arr, test) {
  for (let el of arr) {
    if (!test(el)) return false;
  }
  return true;
}

function every2(arr, test) {
  return !arr.some((el) => !test(el));
}
