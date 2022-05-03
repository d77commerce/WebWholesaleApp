const total = document.querySelector('#All-amount-js');
let small = 0;
let mid = 0;
let big = 0;

function calcTotal(smallInput, midInput, bigInput) {
  let sum = `${parseInt(smallInput + midInput + bigInput)}`;
  total.value = sum;
}
function calcSmall(num) {
  small = 0;
  small += num * 3;
  calcTotal(small, mid, big);
  document.querySelector;
}
function calcMid(num) {
  mid = 0;
  mid += num * 6;
  calcTotal(small, mid, big);
}
function calcBig(num) {
  big = 0;
  big += num * 8;
  calcTotal(small, mid, big);
}
function calcSmallOne(num) {
  small++;
}
function calcMidOne(num) {
  mid++;
}
function calcBigOne(num) {
  big++;
}
function calcSmallMinusOne(num) {
  small--;
}
function calcMidMinusOne(num) {
  mid--;
}
function calcBigMinusOne(num) {
  big--;
}
export { calcTotal, calcBig, calcMid, calcSmall, small, mid, big };
