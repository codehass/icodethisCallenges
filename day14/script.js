const online_mind = document.querySelector(".online-mind");

const intuitive = document.querySelector(".intuitive");
const collaboration = document.querySelector(".collaboration ");
const memory = document.querySelector(".memory");
const focus = document.querySelector(".focus");

const free = document.querySelector(".free");
const overview = document.querySelector(".overview");
const free_flow = document.querySelector(".free-flow");

const lineOptions = {
	size: 1,
	dash: true,
	endPlug: "disc",
	startPlug: "disc",
};

// create lines for online-mind element
const intuitive_mind = new LeaderLine(online_mind, intuitive, {
	color: "#e3aa4b",
	...lineOptions,
});

// intuitive_mind.setOptions({ startSocket: "top", endSocket: "right" });

const collaboration_mind = new LeaderLine(online_mind, collaboration, {
	color: "#4acbe2",
	...lineOptions,
});

// collaboration_mind.setOptions({ startSocket: "top", endSocket: "left" });
new LeaderLine(online_mind, memory, { color: "#e25c4a", ...lineOptions });
new LeaderLine(online_mind, focus, { color: "#4a90e2", ...lineOptions });

// create lines for focus element
const line = new LeaderLine(focus, free, {
	color: "#4a90e2",
	...lineOptions,
});

// line.setOptions({ startSocket: "right", endSocket: "left" });

new LeaderLine(focus, overview, { color: "#4a90e2", ...lineOptions });
new LeaderLine(focus, free_flow, {
	color: "#4a90e2",
	...lineOptions,
});
