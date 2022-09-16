const inputField = document.getElementById("input");

const insertNum = (num) => (inputField.textContent += num);

const equalTo = () => (inputField.textContent ? (inputField.textContent = eval(inputField.textContent)) : false);

const clearInput = () => (inputField.textContent = "");

const eraseNum = () => (inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1));

let credits = "©Satu";
