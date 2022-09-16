function insertNum(element) {
  document.getElementById("input").innerHTML += element;
}
function equalTo() {
  let result = eval(document.getElementById("input").innerHTML);
  document.getElementById("input").innerHTML = result;
}

function clearInput() {
  document.getElementById("input").innerHTML = "";
}
function eraseNum() {
  let input = document.getElementById("input");
  input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length - 1);
}

let credits = "©Satu";
