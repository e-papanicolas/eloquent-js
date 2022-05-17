function chessboard() {
  let space = " ";
  let hashtag = "#";
  let size = 8;
  let board = "";

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 === 0) {
        board += space;
      } else {
        board += hashtag;
      }
    }
    board += "\n";
  }
  console.log(board);
}
