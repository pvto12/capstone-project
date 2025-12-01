const closeBtn = document.querySelector(".close-form");
const formContainer = document.querySelector(".form-container");

const celebrant = document.querySelector("#celebrant");
const sender = document.querySelector("#sender");
const wishes = document.querySelector("#wishes");

const btn = document.querySelector("button");

closeBtn.addEventListener("click", () => {
	console.log("clicked");

	formContainer.style.display = "none";
});
