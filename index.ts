var tdElements = document.getElementsByTagName('TD');

for(var tdElement of tdElements) {
  tdElement. addEventListener('click', handleClick);
}

function handleClick() {
  alert('hello');
}