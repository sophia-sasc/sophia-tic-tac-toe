var tdElements = document.getElementsByTagName("TD");

for (var tdElement of tdElements) {
  tdElement.addEventListener("click", handleClick);
}
var 
function handleClick(event) {
  var target = event.target;
  if (isO) { 
    target.innerHTML = "O";
isO
  }

  target.innerHTML = "X";
}
