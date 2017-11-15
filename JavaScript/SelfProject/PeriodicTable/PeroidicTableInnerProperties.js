"use strict"

window.onload = function tableMaker() {

	var cella = document.getElementsByTagName("td");

	for (var i = 0; i < cella.length; i++) {



		if (cella[i].innerHTML == "") {

			cella[i].style.border = "none";

		} else {
			cella[i].setAttribute("draggable", "true");
			cella[i].setAttribute("ondragstart", "drag(event)");
			
		}
	}
	var headcella = document.getElementsByTagName('th');

	for (var i = 0; i < headcella.length; i++) {



		if (headcella[i].innerHTML == "") {

			headcella[i].style.border = "none";
		}
	}
}

function allowDrop(ev) {
	ev.preventDefault();

}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.innerHTML);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	
	ev.target.innerHTML = data;


}
var EN = [];
var ENwithObjects = [];


