export const orderItem = (itemName, itemSize, itemPieces) =>
  `<p id="${itemName}remove">${itemName} size ${itemSize} £ ${itemPieces} </p><button id = "${itemName}remove" >remove X</button>`;

const activRemove = document.querySelector('.All-total');
activRemove.addEventListener('click', removeItem);
function removeItem(ev) {
  console.log(ev.target.id);
  let item = ev.target.id;
  let element = document.getElementById(item);
  element.parentNode.removeChild(element);
}
