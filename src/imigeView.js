import { icons } from "./icons.js";
import {
  html,
  render,
  nothing,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2.2.1/core/lit-core.min.js";

const overlay = document.querySelector("#overlay");
const overlayDisplayPicture = document.querySelector("#displayViewPicture");
const closeBtnView = document
  .querySelector("#closeModal")
  .addEventListener("click", () => {
    overlay.style.display = "none";
  });

export function openViewImege(iconImgInput) {
  icons.forEach((element) => {
    if (element.img == iconImgInput) {
      console.log(element.img);
      overlay.style.display = "block";

      const content = html`<h2>${element.iconName}</h2>
        <img
          src="./pictures/${element.img}.jpg"
          alt="${element.iconName}"
          width="500"
          height="600"
        />`;
      render(content, overlayDisplayPicture);
    }
  });
}
