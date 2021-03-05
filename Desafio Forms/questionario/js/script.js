
var data = new Date();


var dia = data.getDate();
var dia_sem = data.getDay();
var mes = data.getMonth();
var ano2 = data.getYear();
var ano4 = data.getFullYear();
var hora = data.getHours();
var min = data.getMinutes();
var seg = data.getSeconds();
var mseg = data.getMilliseconds();
var tz = data.getTimezoneOffset();


var str_data = dia + '/' + (mes + 1) + '/' + ano4;
var str_hora = hora + ':' + min + ':' + seg;


alert('Hoje é ' + str_data + ' às ' + str_hora);


const x = document.getElementById("local");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else { x.innerHTML = "O seu navegador não suporta Geolocalização."; }
}
function showPosition(position) {
    document.getElementById("x").innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

getLocation();
showPosition()