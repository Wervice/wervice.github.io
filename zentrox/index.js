function hideModal(id) {
	document.getElementById(id).classList.toggle("popin");
	setTimeout(() => {
		document.getElementById(id).open = false;
		document.documentElement.style.overflowY = "";
		document.getElementById(id).classList.toggle("popin");
	}, 240);
}

function copyToClipboard(text) {
	const textarea = document.createElement("textarea");
	textarea.value = text;
	document.body.appendChild(textarea);
	textarea.select();
	textarea.setSelectionRange(0, 99999); // For mobile devices
	document.execCommand("copy");
	document.body.removeChild(textarea);
}

window.onload = () => {
	document
		.getElementById("installer_command_copy")
		.addEventListener("click", () => {
			copyToClipboard(
				"curl -fsSL https://raw.githubusercontent.com/Wervice/zentrox/main/install.bash -o zentrox_installer.bash; bash zentrox_installer.bash",
			);
		document.getElementById("installer_command_copy").innerHTML = "Copied to clipboard"	
		});

	document.getElementById("close_modal").addEventListener("click", () => {
		hideModal("copied_what_now");
	});

	window.addEventListener("keydown", (key) => {
		console.log(key);
		if (key.key === "Escape") {
			hideModal("copied_what_now");
		}
	});

	showFlickeringText = true
	setInterval(() => {
	let zentroxWordsI = 0
	let zentroxWords = ""
	while (zentroxWordsI != 1000) {
		zentroxWords += ["server", "remote", "admin", "control", "resources", "open source", "packages", "connections", "tasks"][Math.floor(Math.random()*10)]+" "
		zentroxWordsI++;
	}
		if (showFlickeringText) {
			document.getElementById("text_wallpaper").innerHTML = zentroxWords}}, 100)
	setTimeout(() => {
		showFlickeringText = false
	}, 1500)
};
