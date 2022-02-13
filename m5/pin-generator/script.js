const generatorInput = document.querySelector(".pin-generator > .form-control");
const generateBtn = document.querySelector(".pin-generator > .generate-btn");
const userInput = document.querySelector(".input-section > .form-control");
const submitBtn = document.querySelector(".input-section .submit-btn");
const calculatorBtns = document.querySelectorAll(".calc-body .button");
const submitAttempt = document.querySelector(".input-section .action-left");
const matched = document.querySelector(".notify-section .matched");
const notMatched = document.querySelector(".notify-section .notmatched");
let generatedPin = 0;
let submittedPin = 0;
let attempt = 3;

generateBtn.addEventListener("click", pinGenerator);
calculatorBtns.forEach((btn) => {
	btn.addEventListener("click", userPinGenerator);
});
submitBtn.addEventListener("click", handlePinSubmit);

// Random 4digit pin generate
function pinGenerator() {
	generatedPin = Math.floor(1000 + Math.random() * 9000);
	generatorInput.value = generatedPin;
	generatorInput.disabled = true;
	generatorInput.classList.add("active");
	userInput.focus();
	userInput.value = "";
}

// User pin generate
function userPinGenerator(e) {
	const { innerText: btnLabel } = e.target;
	userInput.disabled = true;

	if (btnLabel === "<") {
		userInput.value = userInput.value.slice(0, -1);
	} else if (btnLabel === "C") {
		userInput.value = "";
	} else {
		if (userInput.value.length < 4) {
			userInput.value += btnLabel;
			submittedPin = parseInt(userInput.value);
		}
	}
}

// Handle user pin submit
function handlePinSubmit() {
	userInput.value = "";
	userInput.blur();

	if (generatedPin > 0 && submittedPin > 0) {
		attempt--;

		if (generatedPin !== submittedPin) {
			// Reset submittedPin and UI Update
			submittedPin = 0;
			submitAttempt.innerHTML = `Attempt left ${attempt}`;
			submitAttempt.style.color = "#ff3c5f";

			// showing notification
			notMatched.classList.add("active");
			setTimeout(() => {
				notMatched.classList.toggle("active");
			}, 3000);
		}
	} else if (generatedPin === 0 || submittedPin === 0) {
		console.log("pin:", generatedPin, "u-pin:", submittedPin, "one 0");
	}
	if (attempt === 0) {
		submitBtn.disabled = true;
	}
	if (generatedPin > 0 && generatedPin === submittedPin) {
		generatedPin = 0;
		submittedPin = 0;
		attempt = 3;

		// Reset generated, submitted pin, attempt
		generatorInput.value = "";
		generatorInput.disabled = false;
		generatorInput.classList.remove("active");
		userInput.disabled = false;
		userInput.value = "";

		submitAttempt.innerHTML = `Attempt left ${attempt}`;

		// showing notification
		matched.classList.add("active");
		setTimeout(() => {
			matched.classList.toggle("active");
		}, 3000);
	}
}
