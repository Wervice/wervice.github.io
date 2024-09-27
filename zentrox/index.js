function showScreenshot(imageSrc) {
	var modal = document.getElementById("screenshotModal");
	var image = document.querySelector("#screenshotModal img");
	modal.hidden = false;
	image.src = imageSrc;
}

window.addEventListener("load", () => {
	var modal = document.getElementById("screenshotModal");
	var baticon = document.getElementById("bat");

	let batSources = ["bat_low.svg", "bat_mid.svg", "bat_full.svg"];
	let batI = 0;
	let batGI = 0;

	setInterval(() => {
		if (batGI > 2) {
			return
		}
		baticon.src = batSources[batI];
		batI++;
		if (batI > 2) {
			batI = 0;
			batGI++
		}
	}, 500)

	modal.addEventListener("click", () => {
		modal.hidden = true;
	});

	window.addEventListener("keydown", (key) => {
		if (key.key == "Escape") {
			var modal = document.getElementById("screenshotModal");
			modal.hidden = true;
		}
	});
});
