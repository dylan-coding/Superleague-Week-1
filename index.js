var n = 0;
var button = document.getElementById('track');
button.addEventListener('click', trakeo);

var clicks = document.getElementById('click_tracker');
clicks.innerHTML = n;

function trakeo() {
    n++
    clicks.innerHTML = n;
}

var coord = document.getElementById("coord_table");
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
}