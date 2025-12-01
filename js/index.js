const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".show-or-hide");
let menuOpen = false;

const openAndClose = () => {
	// console.log("clicked");

	if (!menuOpen) {
		navbar.style.display = "block";
		hamburger.src = "./images/icon-close.svg";
		hamburger.style.color = "white";
		hamburger.style.height = "25px";
		hamburger.style.width = "25px";
		menuOpen = true;

		formContainer.style.display = "none";
	} else if (menuOpen) {
		navbar.style.display = "none";
		menuOpen = false;
		hamburger.src = "./images/mobile_menu.png";
	}
};

hamburger.addEventListener("click", openAndClose);
