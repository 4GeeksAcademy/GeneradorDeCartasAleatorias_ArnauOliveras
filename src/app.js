/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let nums = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let stiks = ["♦", "♥", "♠", "♣"];

window.onload = function() {
  document.getElementById("changeCardButton").addEventListener("click", e => {
    getRandomCard();
  });

  setInterval(getRandomCard, 10000);
  getRandomCard();
};

function getRandomCard() {
  document.getElementById("num").textContent = getRandomElement(nums);

  let stickIcon = getRandomElement(stiks);
  let stickClass;
  switch (stickIcon) {
    case "♦":
      stickClass = "diamond";
      break;
    case "♥":
      stickClass = "heart";
      break;
    case "♠":
      stickClass = "spade";
      break;
    case "♣":
      stickClass = "club";
      break;
  }

  document.getElementById("stick_1").className = "";
  document.getElementById("stick_1").classList.add(stickClass);
  document.getElementById("stick_2").className = "";
  document.getElementById("stick_2").classList.add(stickClass);
  document.getElementById("stick_1").textContent = stickIcon;
  document.getElementById("stick_2").textContent = stickIcon;
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
