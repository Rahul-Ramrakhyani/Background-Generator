var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient(){
	body.style.background ="linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+")";	

		color1.addEventListener("input", setGradient);
				
		color2.addEventListener("input", setGradient);
		
		css.textContent = body.style.background + ";";
}

function getRandomColor() {
	return (
		'#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6));
}

function setRandomColors() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

setGradient();
button.addEventListener("click", setRandomColors);