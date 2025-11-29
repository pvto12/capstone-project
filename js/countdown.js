const countDownContainer = document.querySelector(".count-down");

const daysEl = document.querySelector("#day");
const hoursEl = document.querySelector("#hour");
const minutesEl = document.querySelector("#minute");
const secondsEl = document.querySelector("#second");

const handleCountdown = (birthday) => {
	const birthDate = new Date(birthday).getTime();

	const setCountdown = setInterval(() => {
		const today = new Date().getTime();
		let daysDiff = birthDate - today;
		console.log(daysDiff);

		// 1s = 1000ms
		// 1m = 60s
		// 1hr = 60m
		// 1d = 24hr

		// values in miliseconds
		const oneSeconds = 1000;
		const oneMinute = 1000 * 60;
		const oneHour = 1000 * 60 * 60;
		const oneDay = 1000 * 60 * 60 * 24;

		// Calculations for days only
		const days = Math.floor(daysDiff / oneDay);

		// Calculations for all units:
		const hours = Math.floor((daysDiff % oneDay) / oneHour);

		const minutes = Math.floor((daysDiff % oneHour) / oneMinute);

		const seconds = Math.floor((daysDiff % oneMinute) / oneSeconds);

		if (daysDiff > 0) {
			daysEl.textContent = String(days).padStart(2, "0");
			hoursEl.textContent = String(hours).padStart(2, "0");
			minutesEl.textContent = String(minutes).padStart(2, "0");
			secondsEl.textContent = String(seconds).padStart(2, "0");
		}
		//    else if (birthDate<)
		else {
			clearInterval(setCountdown);

			countDownContainer.innerHTML = "Happy Birthday";
		}
	}, 1000);
};

// date format: Month-day-year
const birthday = "11-28-2026";
handleCountdown(birthday);
