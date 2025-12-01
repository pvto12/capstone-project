const teamMember = document.querySelector(".team-member");

const birthdayForm = document.querySelector(".birthday-wishes");

const closeBtn = document.querySelector(".close-form");
const formContainer = document.querySelector(".form-container");

const celebrant = document.querySelector("#celebrant");
const sender = document.querySelector("#sender");
const wishes = document.querySelector("#wishes");

// navbar
// const navbar = document.querySelector(".show-or-hide");

closeBtn.addEventListener("click", () => {
	formContainer.style.display = "none";
});

teamMember.addEventListener("click", () => {
	formContainer.style.display = "block";

	navbar.style.display = "none";
});

formContainer.addEventListener("submit", (e) => {
	e.preventDefault();

	formContainer.style.display = "none";
});

function init() {
	formContainer.style.display = "none";
}

init();
