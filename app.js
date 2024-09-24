function getValueById(id) {
  let value = parseFloat(document.getElementById(id).value);
  return value;
}

function getTextById(id) {
  let textValue = parseFloat(document.getElementById(id).innerText);
  return textValue;
}

let navDisplay = document.getElementById("navDisplay");
let mainDonation = document.getElementById("mainDonation");
let mainHistory = document.getElementById("mainHistory");
let donationHistory = document.getElementById("donationHistory");
let transitionHistory = document.getElementById("transitionHistory");

mainHistory.addEventListener("click", function () {
  mainDonation.classList.remove("btn-2");
  mainDonation.classList.add("btn-3");
  mainHistory.classList.remove("btn-3");
  mainHistory.classList.add("btn-2");
  transitionHistory.classList.remove("hidden");
  donationHistory.classList.add("hidden");
});

mainDonation.addEventListener("click", function () {
  mainDonation.classList.remove("btn-3");
  mainDonation.classList.add("btn-2");
  mainHistory.classList.remove("btn-2");
  mainHistory.classList.add("btn-3");
  donationHistory.classList.remove("hidden");
  transitionHistory.classList.add("hidden");
});

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
    <div class="bg-slate-50 mt-1 mx-auto w-5/6">
      <h2 class="text-xl" > Invalid Transition</h2>
      <p>Date: ${new Date()}</p>
    </div>
      `;
      document.getElementById("transitionHistory").appendChild(div);
    } else {
      let noakhaliNewAmount = noakhaliAmount + noakhaliDisplayAmount;
      let navNewAmount = navDisplayAmount - noakhaliAmount;

      noakhaliDisplay.innerText = noakhaliNewAmount;
      noakhaliDonate.value = "";
      navDisplay.innerText = navNewAmount;
      my_modal_5.showModal();

      const div = document.createElement("div");
      div.innerHTML = `
      <div class="bg-slate-50 mt-1 mx-auto w-5/6">
        <h4 class="text-xl" > ${noakhaliAmount} Taka is Donated for Flood Relief in Noakhali ,Bangladesh</h4>
        <p>Date: ${new Date()}</p>
      </div>

      `;
      document.getElementById("transitionHistory").appendChild(div);
    }
  });

// dhaka

document.getElementById("dhakaDonate").addEventListener("click", function (e) {
  e.preventDefault();
  let dhakaDisplay = document.getElementById("dhakaDisplay");
  let dhakaDonate = document.getElementById("dhakaAmount");
  let dhakaAmount = getValueById("dhakaAmount");
  let dhakaDisplayAmount = getTextById("dhakaDisplay");
  let navDisplayAmount = getTextById("navDisplay");

  if (
    navDisplay <= 0 ||
    dhakaAmount <= 0 ||
    dhakaAmount > navDisplayAmount ||
    isNaN(dhakaAmount) === true
  ) {
    alert("Please check your amount");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="bg-slate-50 mt-1 mx-auto w-5/6">
      <h2 class="text-xl" > Invalid Transition</h2>
      <p>Date: ${new Date()}</p>
</div>
      `;
    document.getElementById("transitionHistory").appendChild(div);
  } else {
    let dhakaNewAmount = dhakaAmount + dhakaDisplayAmount;
    let navNewAmount = navDisplayAmount - dhakaAmount;

    dhakaDisplay.innerText = dhakaNewAmount;
    dhakaDonate.value = "";
    navDisplay.innerText = navNewAmount;
    my_modal_5.showModal();

    const div = document.createElement("div");
    div.innerHTML = `
    <div class="bg-slate-50 mt-1 mx-auto w-5/6">
      <h4 class="text-xl" > ${dhakaAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h4>
      <p>Date: ${new Date()}</p>
</div>
      `;
    document.getElementById("transitionHistory").appendChild(div);
  }
});

//feni

document.getElementById("feniDonate").addEventListener("click", function (e) {
  e.preventDefault();
  let feniDisplay = document.getElementById("feniDisplay");
  let feniDonate = document.getElementById("feniAmount");
  let feniAmount = getValueById("feniAmount");
  let feniDisplayAmount = getTextById("feniDisplay");
  let navDisplayAmount = getTextById("navDisplay");

  if (
    navDisplay <= 0 ||
    feniAmount <= 0 ||
    feniAmount > navDisplayAmount ||
    isNaN(feniAmount) === true
  ) {
    alert("Please check your amount");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="bg-slate-50 mt-1 mx-auto w-5/6">
      <h2 class="text-xl" > Invalid Transition</h2>
      <p>Date: ${new Date()}</p>
</div>
      `;
    document.getElementById("transitionHistory").appendChild(div);
  } else {
    let feniNewAmount = feniAmount + feniDisplayAmount;
    let navNewAmount = navDisplayAmount - feniAmount;

    feniDisplay.innerText = feniNewAmount;
    feniDonate.value = "";
    navDisplay.innerText = navNewAmount;
    my_modal_5.showModal();

    const div = document.createElement("div");
    div.innerHTML = `
    <div class="bg-slate-50 mt-1 mx-auto w-5/6">
      <h4 class="text-xl" > ${feniAmount} Taka is Donated for Flood Relief in Feni ,Bangladesh</h4>
      <p>Date: ${new Date()}</p>
</div>
      `;
    document.getElementById("transitionHistory").appendChild(div);
  }
});
