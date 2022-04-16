import { icons } from './icons.js';

export function openViewImege(iconImgInput) {
  icons.forEach(element => {
    if (element.img == iconImgInput) {
      console.log(element.img);
    }
  });
}
