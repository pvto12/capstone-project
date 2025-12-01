const teamMember = document.querySelector(".team-member");

const birthdayForm = document.querySelector(".birthday-wishes");

const closeBtn = document.querySelector(".close-form");
const formContainer = document.querySelector(".form-container");

const celebrant = document.querySelector("#celebrant");
const sender = document.querySelector("#sender");
const wishes = document.querySelector("#wishes");

const birthdays = localStorage.getItem("day") || [];
console.log(birthdays);

closeBtn.addEventListener("click", () => {
	formContainer.style.display = "none";
});

teamMember.addEventListener("click", () => {
	formContainer.style.display = "block";

	navbar.style.display = "none";
});

formContainer.addEventListener("submit", (e) => {
	e.preventDefault();

	// get d input values
	const salutation = document.querySelector("#salutation").value;
	const firstname = document.querySelector("#firstname").value;
	const lastname = document.querySelector("#lastname").value;
	const gender = document.querySelector("#gender").value;
	const dob = document.querySelector("#dob").value;

	const createBirthdate = {
		id: new Date().getTime(),
		salutation,
		firstname,
		lastname,
		gender,
		dob,
	};

	birthdays.push(createBirthdate);
	birthdays.sort((a, b) => b.id - a.id);

	localStorage.setItem("day", JSON.stringify(createBirthdate));

	formContainer.style.display = "none";
});

function init() {
	formContainer.style.display = "none";

	localStorage.getItem("day");
}

init();
