const checkboxes = [...document.querySelectorAll("#three input")];
const prices = document.querySelectorAll(".price");
const button = document.querySelector(".footer a:last-child");
const a = document.querySelectorAll("input")[0];
const b = document.querySelectorAll("input")[1];
const c = document.querySelectorAll("input")[2];

const details = JSON.parse(localStorage.getItem("details"));
if (details.billingFrequency === "Yearly") {
  prices[0].textContent = "+$10/yr";
  prices[1].textContent = "+$20/yr";
  prices[2].textContent = "+$20/yr";
}

const add = {
  "Larger storage": 0,
  "Customizable profile": 0,
  "Online service": 0,
};

details.addOns.forEach((addon) => {
  add[addon] += 1;
});

if (add["Online service"] % 2 != 0) {
  a.checked = true;
}
if (add["Larger storage"] % 2 != 0) {
  b.checked = true;
}
if (add["Customizable profile"] % 2 != 0) {
  c.checked = true;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    checkbox.checked
      ? (checkbox.parentElement.id = "selected-plan")
      : (checkbox.parentElement.id = "");

    details.addOns.push(
      checkbox.parentElement.querySelector("div p:first-child").textContent
    );
  });
});

button.addEventListener("click", () => {
  localStorage.setItem("details", JSON.stringify(details));
});
