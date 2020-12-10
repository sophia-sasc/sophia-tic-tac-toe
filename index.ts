var tdElements = document.getElementsByTagName("TD");

for (var tdElement of tdElements) {
  tdElement.addEventListener("click", handleClick);
}
var isO = true
function handleClick(event) {
  var target = event.target;
  if (isO) { 
    target.innerHTML = "O";
isO
  }

  target.innerHTML = "X";
}
var board = [
  //
  ["X", null, null], //
  ["X", "O", null], //
  ["X", "O", null] //
];

if (board[2][2]) {
  // alert(board[1][0]);
}
