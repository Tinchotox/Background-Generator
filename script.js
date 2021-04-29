// let css = document.querySelector("h3");
let css = document.getElementById('gradientTxt');

let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomBtn = document.getElementById("random")


//sets the color for each <input type="color"> & RandomBtn background
function setGradient() {
	let xyGradient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

	body.style.background = xyGradient;
	randomBtn.style.background = xyGradient;
	css.style.background = xyGradient;

	css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value});`.toUpperCase();
}

// calls setGradient function on page load
window.onload = setGradient();

// function for random values
// (1<<24) === 16777216   is using binary to translane into hex somehow
// I convert from hex to decimal.
function getRandomGradient() {
	let randomColor1 = '#'+ Math.floor((Math.random()*(1<<24)|0)).toString(16);
	let randomColor2 = '#'+Math.floor((Math.random()*(1<<24)|0)).toString(16);

	color1.value = randomColor1;
	color2.value = randomColor2;

	setGradient();
	css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value});`.toUpperCase();
}

// COPY txt-- BUTTOn
function copyTxt() {
	let copyText = css;
	copyText.select();
	document.execCommand('copy');

}


document.querySelector("#copyBtn").addEventListener("click", copyTxt);
//end of copy txt code

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", getRandomGradient);
