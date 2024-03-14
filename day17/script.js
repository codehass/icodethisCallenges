const DROP_DOWN = document.getElementById("dropdown");
const CONNECT = document.getElementById("connect");

CONNECT.addEventListener("click", () => {
	CONNECT.classList.toggle("active");
	DROP_DOWN.classList.toggle("show");
	DROP_DOWN.classList.toggle("hidden");
});
