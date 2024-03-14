document.addEventListener("DOMContentLoaded", function () {
	const elements = [
		"one",
		"tow",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
	];

	for (let i = 0; i < elements.length; i++) {
		const element = document.getElementById(elements[i]);
		const svgElement = document.getElementById(
			"svg" + elements[i].charAt(0).toUpperCase() + elements[i].slice(1)
		);

		if (element && svgElement) {
			element.addEventListener("click", function () {
				toggleElementVisibility(element, svgElement);
			});
		} else {
			console.error("Element or SVG element not found for ID: " + elements[i]);
		}
	}
});

function toggleElementVisibility(element, svgElement) {
	if (svgElement.style.display === "none") {
		element.classList.remove("text-[#2C4273]");
		svgElement.style.display = "block";
	} else {
		svgElement.style.display = "none";
		element.classList.add("text-[#2C4273]");
	}
}
