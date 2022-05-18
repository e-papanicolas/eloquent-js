function flatten(arrays) {
  return arrays.reduce((flat, current) => flat.concat(current), []);
}
