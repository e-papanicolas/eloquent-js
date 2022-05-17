function loop() {
  let count = 1;
  let char = "#";
  while (count < 8) {
    console.log(char.repeat(count));
    count++;
  }
}
