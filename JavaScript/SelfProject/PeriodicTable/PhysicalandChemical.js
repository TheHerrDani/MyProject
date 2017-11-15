var solid = [];
var liquid = [];
var gas = [];
var slidervalue;

function tempretures() {

    slidervalue = "";
    var div = document.getElementById("resultTempreture");
    div.innerHTML = "";
    var slider = document.getElementById('slider');
    slidervalue = slider.value;
    var place = document.createElement("div");

    celcius = parseInt(slidervalue) - 273;
    place.innerHTML = slidervalue + " K" + "<br>" + celcius + "&#8451" + "<br>";
    place.style.border = "black solid 1px";
    place.style.textAlign = "center";
    place.style.padding = "70px";
    place.style.fontSize = "30pt";
    div.appendChild(place);

    tempreturesCalculator();
}


function tempreturesCalculator() {
    var szintomb = [];
    solid = document.querySelectorAll(".solid");
    liquid = document.querySelectorAll(".liquid");
    gas = document.querySelectorAll(".gas");
    for (var r = 0; r < solid.length; r++) {
        szintomb[r] = solid[r];
    }
    for (var p = 0; p < liquid.length; p++) {
        szintomb.push(liquid[p]);
    }
    for (var q = 0; q < gas.length; q++) {
        szintomb.push(gas[q]);
    }
    console.log(szintomb);

    var szilardTomb = [];
    for (var i = 0; i < Elements.length; i++) {
        for (var j = 0; j < szintomb.length; j++) {
            if (Elements[i].symbol == szintomb[j].innerHTML) {

                if (Elements[i].MeltingPoint == "Unknown" || Elements[i].BoilingPoint == "Unknown") {
                    szintomb[j].style.backgroundColor = "pink";
                } else if (Elements[i].MeltingPoint > slidervalue) {
                    szintomb[j].style.backgroundColor = "#eee";

                } else if (Elements[i].MeltingPoint < slidervalue && Elements[i].BoilingPoint > slidervalue) {
                    szintomb[j].style.backgroundColor = "blue";

                } else if (Elements[i].BoilingPoint < slidervalue) {
                    szintomb[j].style.backgroundColor = "red";

                }
            }


        }



    }
}