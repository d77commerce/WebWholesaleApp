import { iconsHtml } from './render.js';
import { calcBig, calcMid, calcSmall, small, mid, big } from './calc.js';
import { openViewImege } from './imigeView.js';

iconsHtml();
const calculation = document.querySelector('#container1');
const total = document.querySelector('#All-amount-js');

//const nameOfTargetIcon = document.querySelector;
calculation.addEventListener('click', one);
function one(ev) {
  //console.log(ev.target.className);
  //console.log(ev.target.name.split(' '));
  const result = ev.target.name.split(' ');
  const iconName = result[0];
  const action = result[1];
  const iconSize = result[2];
  //console.log(result);
  if (action === 'add') {
    if (iconSize === 'small') {
      const input = document.querySelector(`#${iconName}quntitysmall`);
      //console.log(input.value);
      if (input.value) calcSmall(parseInt(input.value));
      document.querySelector(`#${iconName}totalsmall`).value = small;
      console.log('small icon');
    } else if (iconSize === 'mid') {
      const input = document.querySelector(`#${iconName}quntitymid`);
      //console.log(input.value);
      if (input.value) calcMid(parseInt(input.value));
      document.querySelector(`#${iconName}totalmid`).value = mid;
      console.log('mid icon');
    } else if (iconSize === 'big') {
      const input = document.querySelector(`#${iconName}quntitybig`);
      //console.log(input.value);
      if (input.value) calcBig(parseInt(input.value));
      document.querySelector(`#${iconName}totalbig`).value = big;
      console.log('big icon');
    }
  } else if (action === 'view') {
    openViewImege(iconName);
  }
}
