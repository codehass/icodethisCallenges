const list = document.getElementById("sort-list");
const sortButton = document.getElementById("sort-button");

sortButton.addEventListener("click", () => {
	list.classList.toggle("flex");
	list.classList.toggle("hidden");
});

function clearInput(input) {
	input.value = "";
}
