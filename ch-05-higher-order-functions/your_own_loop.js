function loop(val, testFunc, updateFunc, bodyFunc) {
  for (let i = val; testFunc(i); i = updateFunc(i)) {
    bodyFunc(i);
  }
}
