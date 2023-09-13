const buttons = document.querySelector(".buttons");
const display = document.querySelector("#display-area");
let _1st_value = "";
let _2nd_value = "";
let _operator = "";

function isNumber(n) {
	let return_value = false;
	let pos = display.innerText.indexOf(".");

	if (!isNaN(Number(n)) || n == ".") {
		return_value = true;
	}

	if (pos >= 0 && n == ".") {
		return_value = false;
	}

	return return_value;
}

window.addEventListener("keypress", function (e) {
	let _key = e.key;
	switch (_key) {
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "7":
		case "8":
		case "9":
		case "-":
		case "*":
		case "+":
		case ".":
		case "Enter":
		case "Escape":
			if (_key == "+") {
				_key = "plus";
			}
			if (_key == "/") {
				_key = "div";
			}
			if (_key == "*") {
				_key = "mult";
			}
			if (_key == "esc") {
				_key = "ac";
			}
			if (_key == "Enter") {
				_key = "equal";
			}
			if (_key == "Escape") {
				_key = "ac";
				console.log("jkk");
			}
			if (_key == ".") {
				_key = "dot";
			}
			document.querySelector(".btn-" + _key).style.backgroundColor = "red";
			break;
	}
});

window.addEventListener("keyup", function (e) {
	let _key = (new_key = e.key);
	switch (_key) {
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "7":
		case "8":
		case "9":
		case "-":
		case "*":
		case "+":
		case ".":
		case "Escape":
		case "Enter":
			if (_key == "+") {
				_key = "plus";
			}
			if (_key == "/") {
				_key = "div";
			}
			if (_key == "*") {
				_key = "mult";
			}
			if (_key == "esc") {
				_key = "ac";
			}
			if (_key == "Enter") {
				_key = "equal";
				new_key = "=";
			}
			if (_key == "Escape") {
				_key = new_key = "AC";
			}
			if (_key == ".") {
				_key = "dot";
			}
			document.querySelector(".btn-" + _key).style.backgroundColor = "";
			compute(new_key);
			break;
	}
});

function compute(cap_value) {
	// for numbers
	if (isNumber(cap_value)) {
		if (display.innerText == "0") {
			display.innerText = "";
		}

		// in preparating to capture 2nd value
		if (_operator != "" && display.innerText == _1st_value) {
			display.innerText = "";
		}

		display.innerText = display.innerText + cap_value;
	}

	// for a/c
	switch (cap_value) {
		case "AC":
			clearCal();
			break;
		case "+":
		case "-":
		case "/":
		case "*":
			setFirstValue();
			setOperator(cap_value);
			break;
		case "=":
			evalute();
			break;
		default:
			break;
	}
}

buttons.addEventListener("click", function (e) {
	let cap_value = e.target.innerText;

	compute(cap_value);
});

function evalute() {
	_2nd_value = display.innerText;
	let atri = _1st_value + _operator + _2nd_value;

	display.innerText = eval(atri);
}

function setFirstValue() {
	_1st_value = display.innerText;
}

function setOperator(opt) {
	_operator = opt;
}

function clearCal() {
	display.innerText = 0;
}
