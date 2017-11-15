var tbody = document.getElementById("tbody");
var checkbox1 = document.getElementById("unit");
var checkbox2 = document.getElementById("ShowID");
var checkbox3 = document.getElementById("ShowTitle");
var checkbox4 = document.getElementById("ReleaseYear");
var checkbox5 = document.getElementById("Rating");
var checkbox6 = document.getElementById("Category");
var checkbox7 = document.getElementById("ShowCast");
var checkbox8 = document.getElementById("Director");
var checkbox9 = document.getElementById("Summary");
var checkbox10 = document.getElementById("Poster");
var checkbox11 = document.getElementById("runtime");
var rowCaged = [];
var Cagedproperty = [];
   function szuro() {
        
        print(Caged);
    }


function print(data) {
    tbody.innerHTML = "";
    rowCaged = [];
    
    for (i = 0; i < data.length; i++) {
        var row = document.createElement("tr");
        Cagedproperty = [];
        if (checkbox1.checked == true) {
            row.innerHTML += "<td>" + data[i].unit + "</td>";
            Cagedproperty.push(data[i].unit);
        }

        if (checkbox1.checked == false) {
            row.innerHTML += "<td>" + "" + "</td>";
            Cagedproperty.push("");
        }

        if (checkbox2.checked == true) {
            row.innerHTML += "<td>" + data[i].show_id + "</td>";
            Cagedproperty.push(data[i].show_id);
        }

        if (checkbox2.checked == false) {
            row.innerHTML += "<td>" + "" + "</td>";
            Cagedproperty.push("");
        }

        if (checkbox3.checked == true) {
            row.innerHTML += "<td>" + data[i].show_title + "</td>";
            Cagedproperty.push(data[i].show_title);
        }

        if (checkbox3.checked == false) {
            row.innerHTML += "<td>" + "" + "</td>";
            Cagedproperty.push("");
        }

        if (checkbox4.checked == true) {

            row.innerHTML += "<td>" + data[i].release_year + "</td>";
            Cagedproperty.push(data[i].release_year);
        }
        if (checkbox4.checked == false) {
            row.innerHTML += "<td>" + "" + "</td>";
           Cagedproperty.push("");
        }

        if (checkbox5.checked == true) {
            row.innerHTML += "<td>" + data[i].rating + "</td>";
            Cagedproperty.push(data[i].rating);
        }

        if (checkbox5.checked == false) {
            row.innerHTML += "<td>" + "" + "</td>";
            Cagedproperty.push("");
        }

        if (checkbox6.checked == true) {
            row.innerHTML += "<td>" + data[i].category + "</td>";
            Cagedproperty.push(data[i].category);
        }

        if (checkbox6.checked == false) {
            row.innerHTML += "<td>" + "" + "</td>";
            Cagedproperty.push("");
        }

        if (checkbox7.checked == true) {
            row.innerHTML += "<td>" + data[i].show_cast + "</td>";
            Cagedproperty.push(data[i].show_cast);
        }

        if (checkbox7.checked == false) {
            row.innerHTML += "<td>" + "" + "</td>";
            Cagedproperty.push("");
        }

        if (checkbox8.checked == true) {
            row.innerHTML += "<td>" + data[i].director + "</td>";
            Cagedproperty.push(data[i].director);
        }

        if (checkbox8.checked == false) {
            row.innerHTML += "<td>" + "" + "</td>";
            Cagedproperty.push("");
        }

        if (checkbox9.checked == true) {
            row.innerHTML += "<td>" + data[i].summary + "</td>";
            Cagedproperty.push(data[i].summary);
        }

        if (checkbox9.checked == false) {
            row.innerHTML += "<td>" + "" + "</td>";
            Cagedproperty.push("");
        }

        if (checkbox10.checked == true) {
            row.innerHTML += '<td><img src="'+ data[i].poster + '"</img></td>';
            Cagedproperty.push(data[i].poster);
        }

        if (checkbox10.checked == false) {
            row.innerHTML += "<td>" + "" + "</td>";
            Cagedproperty.push("");
        }
        if (checkbox11.checked == true) {
            row.innerHTML += "<td>" + data[i].runtime + "</td>";
            Cagedproperty.push(data[i].runtime);
        }

        if (checkbox11.checked == false) {
            row.innerHTML += "<td>" + "" + "</td>";
            Cagedproperty.push("");
        }
        tbody.appendChild(row);
        rowCaged.push(Cagedproperty);
    }
}


