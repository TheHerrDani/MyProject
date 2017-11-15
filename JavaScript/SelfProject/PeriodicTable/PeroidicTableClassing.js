var ElectronStructure = document.getElementById('ElectronStructure');
var Metal = document.getElementById('Metal');
var ElectronStructureDiv = document.getElementById('description');
var MetalDiv = document.getElementById('description2');
window.onload = periodicTableBasicLook();
var S;
var P;
var D;
var F;
var AlkalineMetalArray;
var AlkalineEarthMetalArray;
var ChalcogenArray;
var HalogenArray;
var NobleGasArray;
var LanthanideArray;
var ActinideArray;

var table = document.getElementsByTagName('td');
var td = [];

var checkbox1;
var checkbox2;
var checkbox3;
var checkbox4;
var checkbox5;
var checkbox6;
var checkbox7;

function periodicTableBasicLook() {
	checkbox1 = document.getElementById('AlkalineMetal');
	checkbox2 = document.getElementById('AlkalineEarthMetal');
	checkbox3 = document.getElementById('Chalcogen');
	checkbox4 = document.getElementById('Halogen');
	checkbox5 = document.getElementById('NobleGas');
	checkbox6 = document.getElementById('Lanthanide');
	checkbox7 = document.getElementById('Actinide');

	S = document.querySelectorAll(".s-block");
	P = document.querySelectorAll(".p-block");
	D = document.querySelectorAll(".d-block");
	F = document.querySelectorAll(".f-block");

	if (ElectronStructure.checked == true) {
		checkbox1.checked = false;
		checkbox2.checked = false;
		checkbox3.checked = false;
		checkbox4.checked = false;
		checkbox5.checked = false;
		checkbox6.checked = false;
		checkbox7.checked = false;
		ElectronStructureDiv.removeAttribute("hidden");
		MetalDiv.setAttribute("hidden", "true");
		
		for (var i = 0; i < S.length; i++) {
			S[i].style.backgroundColor = "#EF5029";	
		}
		for (var i = 0; i < P.length; i++) {
			P[i].style.backgroundColor = "#05e39d";	
		}
		for (var i = 0; i < D.length; i++) {
			D[i].style.backgroundColor = "#FFEE00";	
		}
		for (var i = 0; i < F.length; i++) {
			F[i].style.backgroundColor = "#AADDFF";	
		}	
	}

	if (Metal.checked == true) {
		checkbox1.checked = false;
		checkbox2.checked = false;
		checkbox3.checked = false;
		checkbox4.checked = false;
		checkbox5.checked = false;
		checkbox6.checked = false;
		checkbox7.checked = false;
		MetalDiv.removeAttribute("hidden");
		ElectronStructureDiv.setAttribute("hidden", "true");

		for (var i = 0; i < table.length; i++) {
			var tablaCella = parseInt(table[i].innerHTML);
			

			if (table[i].innerHTML != "" && isNaN(tablaCella) == true) {

				td.push(table[i]);

			}
		}

		for (var i = 0; i < td.length; i++) {
		
			if (Elements[i].Material == "Metal") {

				td[i].style.backgroundColor = "#eee";
			} else if (Elements[i].Material == "Semimetal") {

				td[i].style.backgroundColor = "brown";
			} else if (Elements[i].Material == "Nonmetal") {

				td[i].style.backgroundColor = "pink";
			}
			td[69].style.backgroundColor = "brown";
			td[70].style.backgroundColor = "brown";
			td[71].style.backgroundColor = "pink";
			td[83].style.backgroundColor = "#eee";
			td[84].style.backgroundColor = "#eee";
			td[85].style.backgroundColor = "#eee";
		}
	}
		
		
}

function colorize (){
	checkbox1 = document.getElementById('AlkalineMetal');
	checkbox2 = document.getElementById('AlkalineEarthMetal');
	checkbox3 = document.getElementById('Chalcogen');
	checkbox4 = document.getElementById('Halogen');
	checkbox5 = document.getElementById('NobleGas');
	checkbox6 = document.getElementById('Lanthanide');
	checkbox7 = document.getElementById('Actinide');


	AlkalineMetalArray = document.querySelectorAll(".AlkalineClass");
	AlkalineEarthMetalArray = document.querySelectorAll(".AlkalineEarthMetalClass");
	ChalcogenArray = document.querySelectorAll(".ChalcogenClass");
	HalogenArray = document.querySelectorAll(".HalogenClass");
	NobleGasArray = document.querySelectorAll(".NobleGasClass");
	LanthanideArray = document.querySelectorAll(".LanthanideClass");
	ActinideArray = document.querySelectorAll(".ActinideClass");
	

	if(checkbox1.checked == true){
		for (var i = 0; i < AlkalineMetalArray.length; i++) {
			AlkalineMetalArray[i].style.backgroundColor = "blue";	
		}
	}
	if(checkbox1.checked == false){
		if (ElectronStructure.checked == true) {
			for (var i = 0; i < AlkalineMetalArray.length; i++) {
			AlkalineMetalArray[i].style.backgroundColor = "#EF5029";	
		}
		}
		else{
			for (var i = 0; i < AlkalineMetalArray.length; i++) {
			AlkalineMetalArray[i].style.backgroundColor = "#eee";	
		}
		}	
	}
	if(checkbox2.checked == true){
		for (var i = 0; i < AlkalineEarthMetalArray.length; i++) {
			AlkalineEarthMetalArray[i].style.backgroundColor = "#FF5678";	
		}
	}
	if(checkbox2.checked == false){
		if (ElectronStructure.checked == true) {
			for (var i = 0; i < AlkalineEarthMetalArray.length; i++) {
			AlkalineEarthMetalArray[i].style.backgroundColor = "#EF5029";	
		}
		}
		else{
			for (var i = 0; i < AlkalineEarthMetalArray.length; i++) {
			AlkalineEarthMetalArray[i].style.backgroundColor = "#eee";	
		}
		}	
	}
	if(checkbox3.checked == true){
		for (var i = 0; i < ChalcogenArray.length; i++) {
			ChalcogenArray[i].style.backgroundColor = "red";	
		}
	}
	if(checkbox3.checked == false){
		if (ElectronStructure.checked == true) {
			for (var i = 0; i < ChalcogenArray.length; i++) {
			ChalcogenArray[i].style.backgroundColor = "#05e39d";	
		}
		}
		else{
			for (var i = 0; i < ChalcogenArray.length; i++) {
			ChalcogenArray[i].style.backgroundColor = "#eee";	
		}
		}	
	}
	if(checkbox4.checked == true){
		for (var i = 0; i < HalogenArray.length; i++) {
			HalogenArray[i].style.backgroundColor = "green";	
		}
	}
	if(checkbox4.checked == false){
		if (ElectronStructure.checked == true) {
			for (var i = 0; i < HalogenArray.length; i++) {
			HalogenArray[i].style.backgroundColor = "#05e39d";	
		}
		}
		else{
			for (var i = 0; i < HalogenArray.length; i++) {
			HalogenArray[i].style.backgroundColor = "#eee";	
		}
		}	
	}
	if(checkbox5.checked == true){
		for (var i = 0; i < NobleGasArray.length; i++) {
			NobleGasArray[i].style.backgroundColor = "#d5e793";	
		}
	}
	if(checkbox5.checked == false){
		if (ElectronStructure.checked == true) {
			for (var i = 0; i < NobleGasArray.length; i++) {
			NobleGasArray[i].style.backgroundColor = "#05e39d";	
		}
		}
		else{
			for (var i = 0; i < NobleGasArray.length; i++) {
			NobleGasArray[i].style.backgroundColor = "#eee";	
		}
		}	
	}
	if(checkbox6.checked == true){
		for (var i = 0; i < LanthanideArray.length; i++) {
			LanthanideArray[i].style.backgroundColor = "khaki";	
		}
	}
	if(checkbox6.checked == false){
		if (ElectronStructure.checked == true) {
			for (var i = 0; i < LanthanideArray.length; i++) {
			LanthanideArray[i].style.backgroundColor = "#AADDFF";	
		}
		}
		else{
			for (var i = 0; i < LanthanideArray.length; i++) {
			LanthanideArray[i].style.backgroundColor = "#eee";	
		}
		}	
	}
	if(checkbox7.checked == true){
		for (var i = 0; i < ActinideArray.length; i++) {
			ActinideArray[i].style.backgroundColor = "orange";	
		}
	}
	if(checkbox7.checked == false){
		if (ElectronStructure.checked == true) {
			for (var i = 0; i < ActinideArray.length; i++) {
			ActinideArray[i].style.backgroundColor = "#AADDFF";	
		}
		}
		else{
			for (var i = 0; i < ActinideArray.length; i++) {
			ActinideArray[i].style.backgroundColor = "#eee";	
		}
		}	
	}
}