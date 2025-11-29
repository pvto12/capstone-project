// console.log("connected");

const date = new Date();

// console.log(date);

const timestamp = date.getTime();
// console.log(timestamp);

const daysEl = document.querySelector("#day");

const showDetail = () => {
	console.log(daysEl.textContent);
};

showDetail();

// console.log(showDetail());
