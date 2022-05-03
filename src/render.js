import { icons } from "./icons.js";
import {
  html,
  render,
  nothing,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2.2.1/core/lit-core.min.js";
const placeHtml = document.querySelector("#container1");

export const iconsHtml = (all) => html`
  ${all?.map(
    (i) => html`<div name="${i.iconName}" style="margin-bottom: 30px;">
      <div class="picture">
        <img
          style="border-radius: 25px;float: left;"
          src="./pictures/${i.img}.jpg"
          width="295px"
          height="295px"
          alt="icon"
        /><br />
        <button class="btn" name="${i.img} view">View</button>
        <div class="picture-details">
          <h1
            style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
          >
            Size&nbsp;&nbsp;&nbsp;&nbsp;Price&nbsp;&nbsp;&nbsp;&nbsp;Quntity&nbsp;&nbsp;&nbsp;&nbsp;Total
          </h1>
          <div style="margin-top: 15px;" class="options">
            11cm/15cm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(£3:00)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button class="option-btn" name="${i.iconName} plus small">
              +
            </button>
            &nbsp;<input
              type="number"
              style="height: 22px;width:25px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;font-size: large;text-align: center;margin-right: -3px;"
              value=""
              placeholder="0"
              id="${i.iconName}quntitysmall"
            />
            <button class="option-btn-2">-</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<input
              type="number"
              style="height: 22px;width: 46px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;font-size: large;text-align: center;position: relative;left: 3px;"
              id="${i.iconName}totalsmall"
              placeholder="0"
              value=""
              readonly
            />
            <button class="add" name="${i.iconName} add small">ADD</button>
          </div>
          <div style="margin-top: 30px;" class="options">
            15cm/21cm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(£6:00)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button class="option-btn">+</button>
            &nbsp;<input
              type="number"
              style="height: 22px;width: 25px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;font-size: large;text-align: center;margin-right: -3px;"
              placeholder="0"
              value=""
              id="${i.iconName}quntitymid"
            />
            <button class="option-btn-2">-</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<input
              type="number"
              style="height: 22px;width: 46px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;font-size: large;text-align: center;position: relative;left: 3px;"
              placeholder="0"
              value=""
              id="${i.iconName}totalmid"
              readonly
            />
            <button class="add" name="${i.iconName} add mid">ADD</button>
          </div>
          <div style="margin-top: 30px;" class="options">
            20cm/27cm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(£8:00)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button class="option-btn">+</button>
            &nbsp;<input
              type="number"
              style="height: 22px;width: 25px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;font-size: large;text-align: center;margin-right: -3px;"
              placeholder="0"
              value=""
              id="${i.iconName}quntitybig"
            />
            <button class="option-btn-2">-</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<input
              type="number"
              style="height: 22px;width: 46px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;font-size: large;text-align: center;position: relative;left: 3px;"
              placeholder="0"
              value=""
              id="${i.iconName}totalbig"
              readonly
            />
            <button class="add" name="${i.iconName} add big">ADD</button>
          </div>
        </div>
      </div>
    </div> `
  )}
`;

render(iconsHtml(icons), placeHtml);
/*
 
*/
