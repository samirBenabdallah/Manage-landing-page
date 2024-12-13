const emailReg = /^[a-zA-Z0-9._]+@[a-zA-Z.-]+\.[a-zA-Z]{3}$/;
function mobileNavAction() {
  document.body.classList.toggle("nav-open");
  document.querySelector("body > nav").classList.toggle("open");
}
document.querySelector("body > nav").addEventListener("click", mobileNavAction);
document
  .querySelector(".back-screen")
  .addEventListener("click", mobileNavAction);
// * end nav code
function cardsButtonsAction(e) {
  const number = e.target.getAttribute("data-number");
  cardsButtons.forEach((ele) => ele.classList.remove("active"));
  cards.forEach((ele) => ele.classList.remove("active"));
  cards[number].classList.add("active");
  cardsButtons[number].classList.add("active");
}
const cards = Array.from(
  document.querySelectorAll(".about > div > div:not(.mobile-button)")
);
const cardsButtons = Array.from(
  document.querySelectorAll(".about > div > .mobile-button > button")
);

cardsButtons.forEach((ele) =>
  ele.addEventListener("click", cardsButtonsAction)
);
document.querySelector("footer .btn").addEventListener("click", () => {
  const emailContainer = document.querySelector("input");
  const email = emailContainer.value;
  if (!email) return;
  if (emailReg.test(email)) {
    emailContainer.style.color = "black";
    document.getElementById("errorMessage").classList.remove("active");
  } else {
    emailContainer.style.color = "var(--red)";
    document.getElementById("errorMessage").classList.add("active");
  }
});
