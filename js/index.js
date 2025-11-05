const hamburger = document.querySelector(".hamburger");
const unorderedList = document.querySelector("ul");

const openAndClose = () => {
	return unorderedList.classList.toggle("show-or-hide");
};

hamburger.addEventListener("click", openAndClose);
