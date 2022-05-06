export const orderItem = (itemName, itemSize, itemPieces) =>
  `<div id="${itemName}${itemSize}remove"><p>${itemName} size ${itemSize} £ ${itemPieces} </p><button name = "${itemName}${itemSize}remove" >remove X</button></div>`;

const activRemove = document.querySelector('.All-total');
activRemove.addEventListener('click', removeItem);
function removeItem(ev) {
  console.log(ev.target.name);
  let item = ev.target.name;
  document.getElementById(item).remove();
}
