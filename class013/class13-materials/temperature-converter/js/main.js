//Write your pseudo code first!
document.querySelector('#check').addEventListener('click', convert);

function convert() {
  let valueInC = document.querySelector('#sel').value;
  valueInC = (valueInC * 9) / 5 + 32;
  document.querySelector("#placeToSee").innerText = valueInC;
}
