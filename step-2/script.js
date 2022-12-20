const plans = [...document.querySelectorAll(".mid > div")];
const toggle = document.querySelector(".switch");
const frequencies = [...document.querySelectorAll(".end p")];
const planDivs = [...document.querySelectorAll(".mid div div")];
const pricesMo = [...document.querySelectorAll("#new-b")];
const pricesYe = [...document.querySelectorAll("#new-bb")];
const cs = document.querySelectorAll("#new-c");
const button = document.querySelector(".footer a:last-child");

plans[0].id = "selected-plan";
frequencies[0].id = "frequency";

const details = JSON.parse(localStorage.getItem("details"));

const clearPlanSelected = () => {
  plans.forEach((plan) => (plan.id = ""));
};

const changeDisplay = (no) => {
  if (no === 1) {
    pricesMo.forEach((price) => price.classList.add("hide"));
    pricesYe.forEach((price) => price.classList.replace("hide", "show"));
    cs.forEach((price) => price.classList.replace("hide", "show"));
  } else {
    pricesMo.forEach((price) => price.classList.remove("hide"));
    pricesYe.forEach((price) => price.classList.replace("show", "hide"));
    cs.forEach((price) => price.classList.replace("show", "hide"));
  }
};

plans.forEach((plan) => {
  plan.addEventListener("click", () => {
    clearPlanSelected();
    plan.id = "selected-plan";
    details.plan = plan.querySelector("div p:first-child").textContent;
  });
});

toggle.addEventListener("click", () => {
  if (toggle.querySelector("input").checked) {
    changeDisplay(1);
    frequencies[1].id = "frequency";
    frequencies[0].id = "";
    details.billingFrequency = "Yearly";
  } else {
    changeDisplay(0);
    frequencies[0].id = "frequency";
    frequencies[1].id = "";
    details.billingFrequency = "Monthly";
  }
});

button.addEventListener("click", () => {
  localStorage.setItem("details", JSON.stringify(details));
});
