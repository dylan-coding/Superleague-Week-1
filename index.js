localStorage.clickcount = 0;
var button = document.getElementById('track');
button.addEventListener('click', addClicks);

var clicks = document.getElementById('click_tracker');
clicks.innerHTML = localStorage.clickcount;

function addClicks() {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
    clicks.innterHTML = localStorage.clickcount;
}

/*var coord = document.getElementById("coord_table");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(addPosition);
    }
}
function addPosition(position) {
    var coord_table = document.getElementById("coord_table");
    var row = coord_table.insertRow(0);

    var long = row.insertCell(0);
    long.innerHTML = "Longitude: " + position.coords.longitude;

    var lat = row.insertCell(0);
    lat.innerHTML = "Latitude: " + position.coords.latitude;
}*/