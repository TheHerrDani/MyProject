 'use strict'
var reactionPartner;
var reactionPartner1;
var reactionPartner2;
var oxidationAgent;
var reductionAgent;
var oxidationAgentOxidationStateOptions = [];
var reductionAgentOxidationStateOptions = [];
var oxidationAgentOxidationStateOptionsSelectList;
var reductionAgentOxidationStateOptionsSelectList;
var oxidationAgentOxidationStateOptionsLabel;
var reductionAgentOxidationStateOptionsLabel;
var reactionButton;
var oxidationAgentOxidationState;
var reductionAgentOxidationState;
var symbols = [];
var place;

function oxidationAgentOxidationStateOptionsfx(parametersContainer) {

	oxidationAgentOxidationStateOptionsLabel = document.createElement("Label");
	oxidationAgentOxidationStateOptionsLabel.for = "oxidationAgentOxidationStateOptionsSelectList";
	oxidationAgentOxidationStateOptionsLabel.innerHTML = "Oxidálószer: ";
	parametersContainer.appendChild(oxidationAgentOxidationStateOptionsLabel);
	oxidationAgentOxidationStateOptions = oxidationAgent.OxidationState;
	oxidationAgentOxidationStateOptionsSelectList = document.createElement("Select");
	oxidationAgentOxidationStateOptionsSelectList.id = "oxidationAgentOxidationStateOptionsSelectList";
	parametersContainer.appendChild(oxidationAgentOxidationStateOptionsSelectList);


	for (var i = 0; i < oxidationAgentOxidationStateOptions.length; i++) {
		var option = document.createElement("option");
		if (oxidationAgentOxidationStateOptions[i] >= 0) {
			continue;
		}
		option.value = oxidationAgentOxidationStateOptions[i];
		option.text = oxidationAgentOxidationStateOptions[i];
		oxidationAgentOxidationStateOptionsSelectList.appendChild(option);
	}



}

function reductionAgentOxidationStateOptionsfx(parametersContainer) {

	reductionAgentOxidationStateOptionsLabel = document.createElement("Label");
	reductionAgentOxidationStateOptionsLabel.for = "reductionAgentOxidationStateOptionsSelectList";
	reductionAgentOxidationStateOptionsLabel.innerHTML = "Redukálószer: ";
	parametersContainer.appendChild(reductionAgentOxidationStateOptionsLabel);
	reductionAgentOxidationStateOptions = reductionAgent.OxidationState;
	reductionAgentOxidationStateOptionsSelectList = document.createElement("Select");
	reductionAgentOxidationStateOptionsSelectList.id = "reductionAgentOxidationStateOptionsSelectList";
	parametersContainer.appendChild(reductionAgentOxidationStateOptionsSelectList);


	for (var i = 0; i < reductionAgentOxidationStateOptions.length; i++) {
		var option = document.createElement("option");
		if (reductionAgentOxidationStateOptions[i] <= 0) {
			continue;
		}
		option.value = reductionAgentOxidationStateOptions[i];
		option.text = reductionAgentOxidationStateOptions[i];
		reductionAgentOxidationStateOptionsSelectList.appendChild(option);
	}



}

function reactionCircumstance() {
	var element1 = document.getElementById('input1').innerHTML;
	var element2 = document.getElementById('input2').innerHTML;
	var parametersContainer = document.getElementById("parameters");
	parametersContainer.innerHTML = "";



	for (var i = 0; i < Elements.length; i++) {
		if (element1 == Elements[i].symbol) {
			reactionPartner1 = Elements[i];

		}
		if (element2 == Elements[i].symbol) {
			reactionPartner2 = Elements[i];

		}
	}

	if (reactionPartner1.electronNegativity > reactionPartner2.electronNegativity) {
		oxidationAgent = reactionPartner1;
		reductionAgent = reactionPartner2;
		symbols = [];
		symbols.push(oxidationAgent.symbol);
		symbols.push(reductionAgent.symbol);
		oxidationAgentOxidationStateOptionsfx(parametersContainer);
		reductionAgentOxidationStateOptionsfx(parametersContainer);
	} else if (reactionPartner1.electronNegativity < reactionPartner2.electronNegativity) {
		if (reactionPartner1.selfbound == reactionPartner2.selfbound && reactionPartner1.selfbound == "sok") {
			reaction();
			return
		}
		oxidationAgent = reactionPartner2;
		reductionAgent = reactionPartner1;
		symbols = [];
		symbols.push(oxidationAgent.symbol);
		symbols.push(reductionAgent.symbol);
		oxidationAgentOxidationStateOptionsfx(parametersContainer);
		reductionAgentOxidationStateOptionsfx(parametersContainer);
	} else if (reactionPartner1.electronNegativity == reactionPartner2.electronNegativity) {
		reactionPartner = reactionPartner1;
		reactionPartner.OxidationState = 0;
		symbols = [];
		symbols.push(reactionPartner.symbol);

	} else {
		reaction();
		return;
	}
	reactionButton = document.createElement("button");
	reactionButton.type = "button";
	reactionButton.setAttribute("onclick", "reaction();")
	reactionButton.value = "reactionButton";
	reactionButton.innerHTML = "Reakció";

	parametersContainer.appendChild(reactionButton);

}

function reaction() {

	place = document.getElementById("Reaction");

	place.innerHTML = "";


	if (reactionPartner1.selfbound == 0 || reactionPartner2.selfbound == 0) {
		var NobleGas = document.createElement("img");;
		NobleGas.src = "nobleGas.png";
		NobleGas.style.width = "430px";
		place.appendChild(NobleGas);
	} else if (reactionPartner1.selfbound == "sok" && reactionPartner2.selfbound == "sok") {
		var metalicBondPic = document.createElement("img");;
		metalicBondPic.src = "metalicBond.png";
		metalicBondPic.style.width = "430px";
		place.appendChild(metalicBondPic);
		
	} else if (reactionPartner1.selfbound != 0 && reactionPartner2.selfbound != 0 && reactionPartner1 != reactionPartner2) {

		oxidationAgentOxidationState = Math.abs(document.getElementById("oxidationAgentOxidationStateOptionsSelectList").value);
		reductionAgentOxidationState = document.getElementById("reductionAgentOxidationStateOptionsSelectList").value;

		equality(reductionAgentOxidationState, oxidationAgentOxidationState);

	} else {

		equality2();

	}



}



function equality(szam1, szam2) {
	var oxofactor = szam1 / szam2;
	var redfactor = szam2 / szam2;
	var factor = oxofactor % 1;

	var ketharmad = 2 / 3;
	var ketotod = 2 / 5;
	var haromotod = 3 / 5;
	var negyotod = 4 / 5;

	if (factor.toFixed(5) == ketharmad.toFixed(5)) {
		factor = 3;
		oxofactor *= factor;
		redfactor *= factor;
	}else if (factor.toFixed(5) == negyotod.toFixed(5)) {
		factor = 5;
		factor = factor.toFixed(0);
		oxofactor *= factor;
		redfactor *= factor;
	}
	 else if (factor.toFixed(5) == haromotod.toFixed(5)) {
		factor = 5;
		factor = factor.toFixed(0);
		oxofactor *= factor;
		redfactor *= factor;
	} else if (factor.toFixed(5) == ketotod.toFixed(5)) {
		factor = 5;
		factor = factor.toFixed(0);
		oxofactor *= factor;
		redfactor *= factor;
	} else if (factor != 0) {
		factor = 1 / factor;
		factor = factor.toFixed(0);
		oxofactor *= factor;
		redfactor *= factor;
	}


	if (redfactor == 1 && oxofactor == 1) {
		place.innerHTML = symbols[0] + " + " + symbols[1] + " = " + symbols[1] + symbols[0];
	} else if (redfactor == 1 && oxofactor > 1) {
		place.innerHTML = oxofactor + symbols[0] + " + " + symbols[1] + " = " + symbols[1] + symbols[0] + "<sub>" + oxofactor + "</sub>";
	} else if (redfactor > 1 && oxofactor == 1) {
		place.innerHTML = symbols[0] + " + " + redfactor + symbols[1] + " = " + symbols[1] + "<sub>" + redfactor + "</sub>" + symbols[0];
	} else {
		place.innerHTML = oxofactor + symbols[0] + " + " + redfactor + symbols[1] + " = " + symbols[1] + "<sub>" + redfactor + "</sub>" + symbols[0] + "<sub>" + oxofactor + "</sub>";
	}


}

function equality2() {
	var reactionDisplay = document.getElementById('reactionDisplay');
	var NobleGas = document.createElement("img");;
	NobleGas.src = "nobleGas.png";
	NobleGas.style.width = "430px";
	var metalicBondPic = document.createElement("img");;
	metalicBondPic.src = "metalicBond.png";
	metalicBondPic.style.width = "430px";

	var factor = reactionPartner.selfbound;

	if (reactionPartner.selfbound == 0) {
		reactionDisplay.appendChild(NobleGas);
	} else if (reactionPartner.selfbound == "sok") {
		place.appendChild(NobleGas);
		
	} else {
		place.innerHTML = factor + symbols[0] + " = " + symbols[0] + "<sub>" + factor + "</sub>";
	}


}