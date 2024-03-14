const signInForm = document.getElementById("form-sign-in");
const signUpForm = document.getElementById("form-sign-up");

const signInBtn = document.getElementById("signIn-btn");
const signUpBtn = document.getElementById("signUp-btn");

signInBtn.addEventListener("click", () => {
	if (signInForm.classList.contains("hidden")) {
		signInForm.classList.remove("hidden");
		signInForm.classList.add("show");
		signInBtn.classList.add("active");
	}
	signUpForm.classList.add("hidden");
	signUpForm.classList.remove("show");
	signUpBtn.classList.remove("active");
});

signUpBtn.addEventListener("click", () => {
	if (signUpForm.classList.contains("hidden")) {
		signUpForm.classList.remove("hidden");
		signUpForm.classList.add("show");
		signUpBtn.classList.add("active");
	}
	signInForm.classList.remove("show");
	signInForm.classList.add("hidden");
	signUpBtn.classList.remove("active");
});
