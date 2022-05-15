export const total = document.querySelector('#All-amount-js');
let small = 0;
let mid = 0;
let big = 0;
let smallTotal = 0;
let midTotal = 0;
let bigTotal = 0;

function calcTotal(smallInput, midInput, bigInput) {
  let sum = `${parseInt(smallInput + midInput + bigInput)}`;
  total.value = sum;
}
function calcSmall(num) {
  small = num * 3;
  smallTotal += small;
  calcTotal(smallTotal, midTotal, bigTotal);
}
function calcMid(num) {
  mid = num * 6;
  midTotal += mid;
  calcTotal(smallTotal, midTotal, bigTotal);
}
function calcBig(num) {
  big = num * 8;
  bigTotal += big;
  calcTotal(smallTotal, midTotal, bigTotal);
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
