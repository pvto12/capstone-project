const teamMember = document.querySelector(".team-member");

const birthdayForm = document.querySelector(".birthday-wishes");

const closeBtn = document.querySelector(".close-form");
const formContainer = document.querySelector(".form-container");

const celebrant = document.querySelector("#celebrant");
const sender = document.querySelector("#sender");
const wishes = document.querySelector("#wishes");

function closeForm() {
	closeBtn.addEventListener("click", () => {
		// console.log("clicked");

		formContainer.style.display = "none";
	});
}

closeForm();

teamMember.addEventListener("click", () => {
	formContainer.style.display = "block";

	// console.log(formContainer);

	// let;
});

formContainer.addEventListener("submit", (e) => {
	e.preventDefault();

	console.log("clicked");
	formContainer.style.display = "none";
});

// 	// formContainer.style.display = "none";
// });

function init() {
	formContainer.style.display = "none";
}

init();
