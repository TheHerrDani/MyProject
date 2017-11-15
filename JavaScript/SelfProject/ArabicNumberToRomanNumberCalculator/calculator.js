var Rome = ["I", "V", "X", "L", "C", "D", "M", "ↁ", "ↂ"];
var Arab = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000];
var Arab2 = [4, 9, 40, 90, 400, 900, 4000, 9000];
var Rome2max = [3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3];
var Rome2betu = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M", "Mↁ", "ↁ", "Mↂ", "ↂ"];
var Rome2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var arabnumber = [];
var display = "";
var display2 = "";

function reservation() {

	display = document.getElementById("display");
	display2 = document.getElementById("display2");

}

function radioonclick1() {

	document.getElementById("table").removeAttribute("hidden");
	document.getElementById("table2").setAttribute("hidden", "true");
}

function radioonclick2() {

	document.getElementById("table2").removeAttribute("hidden");
	document.getElementById("table").setAttribute("hidden", "true");
}



function szamits() {

	reservation();

	var radiotrue = document.getElementById("arabic").checked;

	if (radiotrue == true) {



		Arabic();
	} else {


		securityvalue = true;

		Roman();

		if (securityvalue == true) {
			kimenet();
		} else {
			print3();
		}

	}
}

function Arabic() {

	var romenumber = [];

	var arabic = parseInt(display.innerHTML);

	while (arabic > 0) {

		if (arabic > 39999) {

			print3();
			break;

		}

		if (arabic >= 10000) {

			var tizezresek = Math.floor(arabic / 10000);

			for (var i = 0; i < tizezresek; i++) {

				romenumber.push(Rome[8]);
				arabic = arabic - 10000;

			}
		}

		if (arabic >= 9000) {

			romenumber.push(Rome[6], Rome[8]);
			arabic = arabic - 9000;
		}
		if (arabic >= 5000) {
			romenumber.push(Rome[7]);
			arabic = arabic - 5000;

		}

		if (arabic >= 4000) {
			romenumber.push(Rome[6], Rome[7]);
			arabic = arabic - 4000;
		}



		if (arabic >= 1000) {

			var ezresek = Math.floor(arabic / 1000);

			for (var i = 0; i < ezresek; i++) {

				romenumber.push(Rome[6]);
				arabic = arabic - 1000;

			}
		}

		if (arabic >= 900) {

			romenumber.push(Rome[4], Rome[6]);
			arabic = arabic - 900;
		}
		if (arabic >= 500) {
			romenumber.push(Rome[5]);
			arabic = arabic - 500;

		}

		if (arabic >= 400) {
			romenumber.push(Rome[4], Rome[5]);
			arabic = arabic - 400;
		}
		if (arabic >= 100) {

			var szazasok = Math.floor(arabic / 100);

			for (var i = 0; i < szazasok; i++) {

				romenumber.push(Rome[4]);
				arabic = arabic - 100;

			}
		}

		if (arabic >= 90) {

			romenumber.push(Rome[2], Rome[4]);
			arabic = arabic - 90;
		}
		if (arabic >= 50) {
			romenumber.push(Rome[3]);
			arabic = arabic - 50;

		}

		if (arabic >= 40) {
			romenumber.push(Rome[2], Rome[3]);
			arabic = arabic - 40;
		}
		if (arabic >= 10) {

			var tizesek = Math.floor(arabic / 10);

			for (var i = 0; i < tizesek; i++) {

				romenumber.push(Rome[2]);
				arabic = arabic - 10;

			}
		}

		if (arabic >= 9) {

			romenumber.push(Rome[0], Rome[2]);
			arabic = arabic - 9;
		}
		if (arabic >= 5) {
			romenumber.push(Rome[1]);
			arabic = arabic - 5;

		}

		if (arabic >= 4) {
			romenumber.push(Rome[0], Rome[1]);
			arabic = arabic - 4;
		}
		if (arabic >= 1) {

			var szazasok = Math.floor(arabic / 1);

			for (var i = 0; i < szazasok; i++) {

				romenumber.push(Rome[0]);
				arabic = arabic - 1;

			}
		}
		var romestring;
		romestring = romenumber.toString();



		romestring = romestring.replace(/,/g, "");



		display.innerHTML = romestring;
	}
}


function Roman() {

	arabnumber = [];

	var Romanic;

	Romanic = display2.innerHTML;

	Romanic = Romanic.split("");

	var index = Romanic.valueOf();

	while (index != "") {

		var szam = Romanic.shift();

		var szam2;

		var szam3;

		if (szam == "ↂ") {

			arabnumber.push(Arab[8]);
			Rome2[16] = Rome2[16] + 1;
			continue;
		}

		if (szam == "ↁ") {

			szam2 = Romanic.shift();

			if (szam2 == "ↂ") {

				securityvalue = false;
				continue;

			} 

			else{
				Romanic.unshift(szam2);
				arabnumber.push(Arab[7]);
				Rome2[14] = Rome2[14] + 1;

			}
		}

		if (szam == "M") {

			szam2 = Romanic.shift();

			if (szam2 == "ↂ") {

				arabnumber.push(Arab2[7]);
				Rome2[15] = Rome2[15] + 1;
				continue;

			}

			if (szam2 == "ↁ") {
				arabnumber.push(Arab2[6]);
				Rome2[13] = Rome2[13] + 1;
				continue;

			}
			if (szam2 == "M"){
				
				szam3 = Romanic.shift();

				if (szam3 == "ↂ"){

					securityvalue = false;
					continue;

				}

				if (szam3 == "ↁ"){

					securityvalue = false;
					continue;

				}

				if (szam3 == "M"){
					
					Romanic.unshift(szam3);
					Romanic.unshift(szam2);
					arabnumber.push(Arab[6]);
					Rome2[12] = Rome2[12] + 1;
					continue;
				}

				if (szam3 == undefined){
					Romanic.unshift(szam2);
					arabnumber.push(Arab[6]);
					Rome2[12] = Rome2[12] + 1;
					continue;
				}
			}
			if (szam2 == "I" || szam2 == "V" || szam2 == "X" || szam2 == "L" || szam2 == "C" || szam2 == "D" ) {
				Romanic.unshift(szam2);
				arabnumber.push(Arab[6]);
				Rome2[12] = Rome2[12] + 1;
				continue;

			} else {
				arabnumber.push(Arab[6]);
				Rome2[12] = Rome2[12] + 1;
			}
		}

		if (szam == "D") {

			szam2 = Romanic.shift();

			if (szam2 == "ↂ" || szam2 == "ↁ" || szam2 == "M") {

				securityvalue = false;
				continue;
			} else {
				Romanic.unshift(szam2);
				arabnumber.push(Arab[5]);
				Rome2[10] = Rome2[10] + 1;
			}
		}

		if (szam == "C") {

			szam2 = Romanic.shift();

			if (szam2 == "M") {

				arabnumber.push(Arab2[5]);
				Rome2[11] = Rome2[11] + 1;
				continue;
			}

			if (szam2 == "D") {
				arabnumber.push(Arab2[4]);
				Rome2[9] = Rome2[9] + 1;
				continue;
			}
			if (szam2 == "ↂ" || szam2 == "ↁ") {

				securityvalue = false;
				continue;
			}

			if (szam2 == "C"){
				
				szam3 = Romanic.shift();

				if (szam3 == "M"){

					securityvalue = false;
					continue;

				}

				if (szam3 == "D"){

					securityvalue = false;
					continue;

				}

				if (szam3 == "C"){
					
					Romanic.unshift(szam3);
					Romanic.unshift(szam2);
					arabnumber.push(Arab[6]);
					Rome2[12] = Rome2[12] + 1;
					continue;
				}

				if (szam3 == undefined){
					Romanic.unshift(szam2);
					arabnumber.push(Arab[6]);
					Rome2[12] = Rome2[12] + 1;
					continue;
				}

			}

			if (szam2 == "I" || szam2 == "V" || szam2 == "X" || szam2 == "L") {
				Romanic.unshift(szam2);
				arabnumber.push(Arab[4]);
				Rome2[8] = Rome2[8] + 1;
				continue;

			} else {
				arabnumber.push(Arab[4]);
				Rome2[8] = Rome2[8] + 1;
			}
		}

		if (szam == "L") {

			szam2 = Romanic.shift();

			if (szam2 == "ↂ" || szam2 == "ↁ" || szam2 == "M" || szam2 == "D" || szam2 == "C") {

				securityvalue = false;
				continue;
			} else {
				Romanic.unshift(szam2);
				arabnumber.push(Arab[3]);
				Rome2[6] = Rome2[6] + 1;
			}
		}

		if (szam == "X") {

			szam2 = Romanic.shift()

			if (szam2 == "C") {

				arabnumber.push(Arab2[3]);
				Rome2[7] = Rome2[7] + 1;
				continue;

			}

			if (szam2 == "L") {
				arabnumber.push(Arab2[2]);
				Rome2[5] = Rome2[5] + 1;
				continue;

			}
			if (szam2 == "I" || szam2 == "V" || szam2 == "X") {
				Romanic.unshift(szam2);
				arabnumber.push(Arab[2]);
				Rome2[4] = Rome2[4] + 1;
				continue;

			}
			if (szam2 == "ↂ" || szam2 == "ↁ" || szam2 == "M" || szam2 == "D") {

				securityvalue = false;
				continue;
			} 

			if (szam2 == "X"){
				
				szam3 = Romanic.shift();

				if (szam3 == "C"){

					securityvalue = false;
					continue;

				}

				if (szam3 == "L"){

					securityvalue = false;
					continue;

				}

				if (szam3 == "X"){
					
					Romanic.unshift(szam3);
					Romanic.unshift(szam2);
					arabnumber.push(Arab[6]);
					Rome2[12] = Rome2[12] + 1;
					continue;
				}

				if (szam3 == undefined){
					Romanic.unshift(szam2);
					arabnumber.push(Arab[6]);
					Rome2[12] = Rome2[12] + 1;
					continue;
				}
			}
			else {
				arabnumber.push(Arab[2]);
				Rome2[4] = Rome2[4] + 1;
			}
		}

		if (szam == "V") {

			szam2 = Romanic.shift();

			if (szam2 == "ↂ" || szam2 == "ↁ" || szam2 == "M" || szam2 == "D" || szam2 == "C" || szam2 == "L") {

				securityvalue = false;
				continue;
			} else {
				Romanic.unshift(szam2);
				arabnumber.push(Arab[1]);
				Rome2[2] = Rome2[2] + 1;
				continue;
			}
		}

		if (szam == "I") {

			szam2 = Romanic.shift();

			if (szam2 == "X") {

				arabnumber.push(Arab2[1]);
				Rome2[3] = Rome2[3] + 1;
				continue;

			}

			if (szam2 == "V") {
				arabnumber.push(Arab2[0]);
				Rome2[1] = Rome2[1] + 1;
				continue;

			}
			if (szam2 == "I"){
				
				szam3 = Romanic.shift();

				if (szam3 == "X"){

					securityvalue = false;
					continue;

				}

				if (szam3 == "V"){

					securityvalue = false;
					continue;

				}

				if (szam3 == "I"){
					
					Romanic.unshift(szam3);
					Romanic.unshift(szam2);
					arabnumber.push(Arab[6]);
					Rome2[12] = Rome2[12] + 1;
					continue;
				}

				if (szam3 == undefined){
					Romanic.unshift(szam2);
					arabnumber.push(Arab[6]);
					Rome2[12] = Rome2[12] + 1;
					continue;
				}
			}

			if (szam2 == "ↂ" || szam2 == "ↁ" || szam2 == "M" || szam2 == "D" | szam2 == "C" || szam2 == "L") {
				securityvalue = false;
				continue;
			} 

			else {
				arabnumber.push(Arab[0]);
				Rome2[0] = Rome2[0] + 1;
			}

		}

	}
}

function kimenet() {
	var darab = 0;
	var maximum = 0;
	for (var i = 0; i <= 16; i++) {
		darab = Rome2[i];
		maximum = Rome2max[i];
		if (darab > maximum) {
			eredmeny = "Nem értelmezhető input";
			Rome2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			break;
		}
	}


	if (darab <= maximum) {
		var eredmeny = 0;

		for (var i = 0; i < arabnumber.length; i++) {

			eredmeny = eredmeny + arabnumber[i];
		}
		Rome2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	}
	display2.innerHTML = eredmeny;
}

function print3() {

	display.innerHTML = "Nem értelmezhető input";
	display2.innerHTML = "Nem értelmezhető input";

}

function clicking() {

	if (display == "") {
		display = document.getElementById("display");


		var numbervalue = parseInt(event.target.innerHTML);

		display.innerHTML = numbervalue;
	} else {

		var numbervalue = parseInt(event.target.innerHTML);

		display.innerHTML += numbervalue;

	}

}

function clickingNull() {

	if (display.innerHTML == undefined || display.innerHTML == "") {

		display.innerHTML = "";

	} else {

		var numbervalue = parseInt(event.target.innerHTML);

		display.innerHTML += numbervalue;

	}
}

function Delete() {
	if (display !== "") {

		var charlength = display.innerHTML.length - 1;

		display.innerHTML = display.innerHTML.substr(0, charlength);
	}
	if (display2 !== "") {

		var charlength = display2.innerHTML.length - 1;

		display2.innerHTML = display2.innerHTML.substr(0, charlength);
	}
}

function DeleteAll() {

	display.innerHTML = "";
	display2.innerHTML = "";
}

function clickingEmpty() {

	display2.innerHTML = "This number is the meaning of life";
}

function clickingChar() {

	if (display2 == "") {
		display2 = document.getElementById("display2");


		var numberchar = event.target.innerHTML;

		display2.innerHTML = numberchar;
	} else {

		var numberchar = event.target.innerHTML;

		display2.innerHTML += numberchar;

	}

}