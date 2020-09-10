var tdElements = document.getElementsByTagName("TD");

for (var tdElement of tdElements) {
  tdElement.addEventListener("click", handleClick);
}

function handleClick(event) {
  var target = event.target;
  target.innerHTML = "X";
}
