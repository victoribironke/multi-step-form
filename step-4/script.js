const plan = document.querySelector("#to div p");
const priic = document.querySelector(".priic");
const details = JSON.parse(localStorage.getItem("details"));
const button = document.querySelector("button");

// document.querySelector("#done").id = "hide";
plan.textContent = `${details.plan} (${details.billingFrequency})`;
let firstPrice = 0;
let storagePrice = 0;
let profilePrice = 0;
let servicePrice = 0;
const add = {
  "Larger storage": 0,
  "Customizable profile": 0,
  "Online service": 0,
  full: false,
};

details.addOns.forEach((addon) => {
  add[addon] += 1;
  add.full = true;
});

if (add.full) {
  document.querySelector(".one").id = "hide";
  if (add["Larger storage"] % 2 != 0) {
    document.querySelector(".three").id = "";
    storagePrice = 2;
    if (details.billingFrequency == "Yearly") {
      document
        .querySelector(".three")
        .querySelector("p:last-child").textContent = "+$20/yr";
      storagePrice = 20;
    }
  }
  if (add["Customizable profile"] % 2 != 0) {
    document.querySelector(".four").id = "";
    profilePrice = 2;
    if (details.billingFrequency == "Yearly") {
      document
        .querySelector(".four")
        .querySelector("p:last-child").textContent = "+$20/yr";
      profilePrice = 20;
    }
  }
  if (add["Online service"] % 2 != 0) {
    document.querySelector(".two").id = "";
    servicePrice = 1;
    if (details.billingFrequency == "Yearly") {
      document.querySelector(".two").querySelector("p:last-child").textContent =
        "+$10/yr";
      servicePrice = 10;
    }
  }
}

let price = "";
if (details.plan == "Arcade") {
  if (details.billingFrequency == "Monthly") {
    price = "$9/mo";
    firstPrice = 9;
  } else if (details.billingFrequency == "Yearly") {
    price = "$90/yr";
    firstPrice = 90;
  }
} else if (details.plan == "Advanced") {
  if (details.billingFrequency == "Monthly") {
    price = "$12/mo";
    firstPrice = 12;
  } else if (details.billingFrequency == "Yearly") {
    price = "$120/yr";
    firstPrice = 120;
  }
} else if (details.plan == "Pro") {
  if (details.billingFrequency == "Monthly") {
    price = "$15/mo";
    firstPrice = 15;
  } else if (details.billingFrequency == "Yearly") {
    price = "$150/yr";
    firstPrice = 150;
  }
}
priic.textContent = price;

(calculate = () => {
  const fullPrice = firstPrice + storagePrice + profilePrice + servicePrice;
  if (details.billingFrequency == "Yearly") {
    document.querySelector(".last p:first-child").textContent =
      "Total (per year)";
    document.querySelector(
      ".last p:last-child"
    ).textContent = `$${fullPrice}/yr`;
  }
  if (details.billingFrequency == "Monthly") {
    document.querySelector(".last p:first-child").textContent =
      "Total (per month)";
    document.querySelector(
      ".last p:last-child"
    ).textContent = `$${fullPrice}/mo`;
  }
})();

button.addEventListener("click", () => {
  document.querySelector("#four").id = "hide";
  document.querySelector(".done").id = "done";
  document.querySelector(".footer").id = "hide";
});
