window.addEventListener("load", function () {
	this.window.addEventListener("mousemove", function (e) {
		console.log(e.screenX + " | " + e.screenY);
		document.getElementById("mouseLight").style.top = e.screenY - 65 + "px";
		document.getElementById("mouseLight").style.left = e.screenX + "px";
	});
});
