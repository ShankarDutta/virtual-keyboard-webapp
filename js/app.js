const fullsec = document.getElementById("option"); // this veriable hold "open button & text" section
const fullkeyboard = document.getElementById("keey"); // this veriable hold keyboard's "input & output" Section
const showresult = document.getElementById("output"); // this veriable store keyboard's "output" Section
const container = document.querySelector(".bubble-container"); // this veriable store keyboard's parent division & bubble is the child division
const space = document.getElementById("gap"); // this variable store space button for every screen
const backspace = document.getElementById("clean"); // this variable store back space  button for desktop screen
const enter = document.getElementById("lineesc"); // this variable store  enter  button for desktop screen
const tab = document.getElementById("gapt"); // this variable store tab button Id
const shift = document.getElementById("exchangealpha"); // this variable store Shift button Id
const cl = document.getElementById("closebtn"); // this variable store closed  button Id

// Block physical keyboard input
showresult.addEventListener("keydown", (e) => {
	e.preventDefault(); // stop typeing
});

// temporary keyboard ui hidden
fullkeyboard.style.display = "none";

//click on open btn
document.getElementById("btn").addEventListener("click", () => {
	//when you click open button its hide option / open section
	fullsec.style.display = "none";
	//when you click open button its shows the keyborad
	fullkeyboard.style.display = "block";
	// then play a voice messge for every user
	let song = new Audio("/Assets/introduce-audio.mpeg");
	song.autoplay = true;

	// Cursor will appear
	showresult.focus();
});

// using the concept of event Delegation to click every button properly
container.addEventListener("click", (e) => {
	if (e.target.classList.contains("bubble")) {
		const clicknum = e.target.textContent.trim(); // store the chlid element values
		showresult.value += clicknum; // add & show into the output area/text arae
		showresult.focus(); // Keep cursor active
	}
});

// function for giving space
space.addEventListener("click", () => {
	const sp = " "; //gap only one empty string only 1
	showresult.value += sp; // add space value on the text area
	showresult.focus(); // Keep cursor active
});

// function for backspace
backspace.addEventListener("click", () => {
	showresult.value = showresult.value.slice(0, -1); // remove value on text area
	showresult.focus(); // Keep cursor active
});

// function for enter
enter.addEventListener("click", () => {
	showresult.value += "\n"; // use of escape sequance charectar
	showresult.focus(); // Keep cursor active
});
// function for tab
tab.addEventListener("click", () => {
	const cp = "    "; //gap four  empty string only 4
	showresult.value += cp; // add 4 space on text area use of tab
	showresult.focus(); // Keep cursor active
});

// fuction for keyboards contain data change with shift button
let isLower = false; // craete a variable define in bollean
shift.addEventListener("click", () => {
	isLower = !isLower; // isLower = uppercase
	document.querySelectorAll(".bubble").forEach((btn) => {
		let txt = btn.textContent; // store the chlid element values
		if (/[a-zA-Z]/.test(txt)) {
			if (isLower) {
				btn.textContent = txt.toLowerCase();
			} else {
				btn.textContent = txt.toUpperCase();
			}
		}
	});
});

// closed the keyboard
cl.addEventListener("click", () => {
	//when you click close button its open option / closed  section
	fullsec.style.display = "block";
	//when you click closed button its showa the option section
	fullkeyboard.style.display = "none";
});
