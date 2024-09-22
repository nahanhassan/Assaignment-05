function getValueById(id) {
  let value = parseFloat(document.getElementById(id).value);
  return value;
}

function getTextById(id) {
  let textValue = parseFloat(document.getElementById(id).innerText);
  return textValue;
}

let d = new Date();
let nowTime = `${d.getDate()}-${
  d.getMonth() + 1
}-${d.getFullYear()}; ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

let navDisplay = document.getElementById("navDisplay");
let noakhaliDisplay = document.getElementById("noakhaliDisplay");
let noakhaliDonate = document.getElementById("noakhaliAmount");

document
  .getElementById("noakhaliDonate")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let noakhaliAmount = getValueById("noakhaliAmount");
    let noakhaliDisplayAmount = getTextById("noakhaliDisplay");
    let navDisplayAmount = getTextById("navDisplay");

    if (
      navDisplay <= 0 ||
      noakhaliAmount <= 0 ||
      noakhaliAmount > navDisplayAmount ||
      isNaN(noakhaliAmount) === true
    ) {
      alert("Please check your amount");
      const p = document.createElement("p");
      p.innerText = `${nowTime}:: Invalid Transition.`;
      document.getElementById("transitionHistory").appendChild(p);
    } else {
      let noakhaliNewAmount = noakhaliAmount + noakhaliDisplayAmount;
      let navNewAmount = navDisplayAmount - noakhaliAmount;

      noakhaliDisplay.innerText = noakhaliNewAmount;
      noakhaliDonate.value = "";
      navDisplay.innerText = navNewAmount;

      const p = document.createElement("p");
      p.innerText = ` ${nowTime}:: Donation Amount: ${noakhaliAmount}, Donation Name: Noakhali`;
      document.getElementById("transitionHistory").appendChild(p);
    }
  });
