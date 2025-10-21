const backspacE = document.getElementById("clean2"); // hold mobile screen backspace sec id
const Enter = document.getElementById("lineesc2"); //hold mobile screen enter sec id
const globe = document.getElementById("new"); //hold globe png id
const trans = document.getElementById("uolow"); //hold mobile screen shift btn id

// function for backspace
backspacE.addEventListener("click", () => {
	showresult.value = showresult.value.slice(0, -1); // remove value on text area
	showresult.focus(); // Keep cursor active
});

// function for enter
Enter.addEventListener("click", () => {
	showresult.value += "\n"; // use of escape sequance charectar
	showresult.focus(); // Keep cursor active
});

// function comming soon
globe.addEventListener("click", () => {
	alert("New Features Coming Soon");
});

// function for shift key
let IsLower = false;
trans.addEventListener("click", () => {
	isLower = !isLower;
	document.querySelectorAll(".bubble").forEach((btn) => {
		let txt = btn.textContent;
		if (/[a-zA-Z]/.test(txt)) {
			if (isLower) {
				btn.textContent = txt.toLowerCase();
			} else {
				btn.textContent = txt.toUpperCase();
			}
		}
	});
});
