var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var wrapper = document.getElementById("wrapper");
var massage = document.querySelector(".massage");

css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

function colorChoose() {
	wrapper.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = wrapper.style.background;
}

color1.addEventListener("input", colorChoose);
color2.addEventListener("input", colorChoose);
css.addEventListener("click", function () {
	navigator.clipboard.writeText(`${wrapper.style.background}`).then(
		function () {
			console.log("Async: Copying to clipboard was successful!");
			massage.classList.toggle("animate");
			var timeoutID = setTimeout(function () {
				massage.classList.toggle("animate");
			}, 1500);
		},
		function (err) {
			console.error("Async: Could not copy text: ", err);
		}
	);
});
