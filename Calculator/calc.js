const inputCalc = document.querySelector(".account");
const resultCalc = document.querySelector(".result");

function input(i) {
  inputCalc.value = inputCalc.value + i;
}
function result() {
  if (eval(inputCalc.value) === undefined) {
    resultCalc.value = "Wrong value";
    inputCalc.value = "Wrong value";
  }
  if (eval(inputCalc.value) === Infinity) {
    resultCalc.value = "Error";
    inputCalc.value = "Сan't divide by zero";
  }
  resultCalc.value = parseFloat(eval(inputCalc.value).toFixed(2));
  inputCalc.value = eval(inputCalc.value);
}
function reset() {
  resultCalc.value = "";
  inputCalc.value = "";
}
function iLoveUkraine() {
  resultCalc.value = "Ukraine";
  inputCalc.value = "Pray for";
}
function engOurFriends() {
  resultCalc.value = "England";
  inputCalc.value = "Our friends";
}
