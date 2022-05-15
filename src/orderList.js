import { total } from './calc.js';
export const orderItem = (itemName, itemSize, itemPrice) =>
  `<div  style="margin-top:4px;" id="${itemName}${itemSize}remove"><p>${itemName}  size  ${itemSize}   £ ${itemPrice} <button name = "${itemName}${itemSize}remove" >remove X</button></p></div>`;

const activRemove = document.querySelector('.All-total');
activRemove.addEventListener('click', removeItem);
function removeItem(ev) {
  console.log(ev.target.name);
  let item = ev.target.name;

  let targetEl = document.getElementById(item);
  let reg = /[0-9]+/;
  console.log(targetEl.textContent);
  let patern = parseInt(targetEl.textContent.match(reg));
  console.log(patern[0]);
  let newValue = parseInt(total.value) - patern;
  total.value = newValue;
  targetEl.remove();
}
