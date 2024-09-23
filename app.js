function getValueById(id) {
  let value = parseFloat(document.getElementById(id).value);
  return value;
}

function getTextById(id) {
  let textValue = parseFloat(document.getElementById(id).innerText);
  return textValue;
}

let navDisplay = document.getElementById("navDisplay");

document
  .getElementById("noakhaliDonate")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let noakhaliDisplay = document.getElementById("noakhaliDisplay");
    let noakhaliDonate = document.getElementById("noakhaliAmount");
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
      const div = document.createElement("div");
      div.innerHTML = `

      <h2 class="text-xl" > Invalid Transition</h2>
      <p>Date: ${new Date()}</p>

      `;
      document.getElementById("transitionHistory").appendChild(div);
    } else {
      let noakhaliNewAmount = noakhaliAmount + noakhaliDisplayAmount;
      let navNewAmount = navDisplayAmount - noakhaliAmount;

      noakhaliDisplay.innerText = noakhaliNewAmount;
      noakhaliDonate.value = "";
      navDisplay.innerText = navNewAmount;

      const div = document.createElement("div");
      div.innerHTML = `

      <h4 class="text-xl" > ${noakhaliAmount} Taka is Donated for Flood Relief in Noakhali ,Bangladesh</h4>
      <p>Date: ${new Date()}</p>

      `;
      document.getElementById("transitionHistory").appendChild(div);
    }
  });
