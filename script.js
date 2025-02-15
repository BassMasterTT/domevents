var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var notebook = document.querySelector("li", [0]);

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strikeThrough() {
	notebook.classList.toggle("done");
}

notebook.addEventListener("click", strikeThrough);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);