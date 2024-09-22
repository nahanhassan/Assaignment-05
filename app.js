function getValueById(id) {
  let value = parseFloat(document.getElementById(id).value);
  return value;
}

function getTextById(id) {
  let textValue = parseFloat(document.getElementById(id).innerText);
  return textValue;
}

let navDisplay = document.getElementById("navDisplay");
let noakhaliDisplay = document.getElementById("noakhaliDisplay");

document
  .getElementById("noakhaliDonate")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let noakhaliAmount = getValueById("noakhaliAmount");
    let noakhaliDisplayAmount = getTextById("noakhaliDisplay");
    let noakhaliNewAmount = noakhaliAmount + noakhaliDisplayAmount;
    let noakhaliDisplayNew = (noakhaliDisplay.innerText = noakhaliNewAmount);

    let navDisplayAmount = getTextById("navDisplay");
    let navNewAmount = navDisplayAmount + noakhaliAmount;
    let navDisplayNew = (navDisplay.innerText = navNewAmount);

    console.log({ noakhaliDisplayNew, navDisplayNew });
  });
