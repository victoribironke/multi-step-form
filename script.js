const button = document.querySelector(".footer a");
const nameInput = document.querySelectorAll("input")[0];
const email = document.querySelectorAll("input")[1];
const phone = document.querySelectorAll("input")[2];

const details = {
  name: "",
  emailAddress: "",
  phoneNumber: "",
  billingFrequency: "Monthly",
  addOns: [],
  plan: "Arcade",
};

nameInput.addEventListener("input", () => {
  details.name = nameInput.value;
});

email.addEventListener("input", () => {
  details.emailAddress = email.value;
});

phone.addEventListener("input", () => {
  details.phoneNumber = phone.value;
});

button.addEventListener("click", () => {
  localStorage.setItem("details", JSON.stringify(details));
});
