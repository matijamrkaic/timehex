import "./style.css";

const $app = document.getElementById("app");

function draw(timestamp = Date.now()) {
	const date = new Date(timestamp);
	const h = ("0" + date.getHours()).slice(-2);
	const m = ("0" + date.getMinutes()).slice(-2);
	const s = ("0" + date.getSeconds()).slice(-2);

	const $entry = document.createElement("time");
	$entry.innerHTML = "#" + " " + h + ":" + m + ":" + s;
	$entry.setAttribute("datetime", date);
	$entry.style.background = "#" + h + m + s;

	if (s == "00") {
		$entry.className += " mark-minute";
	}

	if (m == "00" && s == "00") {
		$entry.className += " mark-hour";
	}

	$app.insertBefore($entry, $app.firstChild);
}

function init() {
	const timestamp = Date.now();

	for (let i = 5 * 60 + 1; i > 0; i--) {
		draw(timestamp - 1000 * i);
	}

	setInterval(draw, 1000);
}

init();
