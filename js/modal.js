const teamMember = document.querySelector(".team-member");

const birthdayForm = document.querySelector(".birthday-wishes");

const closeBtn = document.querySelector(".close-form");
const formContainer = document.querySelector(".form-container");

const celebrant = document.querySelector("#celebrant");
const sender = document.querySelector("#sender");
const wishes = document.querySelector("#wishes");

// ds is an array and can be used to populate the birthday page
const birthdays = JSON.parse(localStorage.getItem("day")) || [];

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
	let salutation = document.querySelector("#salutation").value;
	let firstname = document.querySelector("#firstname").value;
	let lastname = document.querySelector("#lastname").value;
	let gender = document.querySelector("#gender").value;
	let dob = document.querySelector("#dob").value;

	const createBirthdate = {
		id: new Date().getTime(),
		salutation,
		firstname,
		lastname,
		gender,
		dob,
	};

	birthdays.push(createBirthdate);

	// sort birthdays by ranking d last one as d 1st
	birthdays.sort((a, b) => b.id - a.id);

	localStorage.setItem("day", JSON.stringify(birthdays));

	formContainer.style.display = "none";

	// return form values to empty strings
	salutation = "";
	firstname = "";
	lastname = "";
	gender = "";
	dob = "";
});

function init() {
	formContainer.style.display = "none";

	localStorage.getItem("day");

	console.log(birthdays);
}

init();
