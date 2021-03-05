function saveLocalStorage(key, value) {
    localStorage.setItem(key, value);
    localStorage.setItem(key, value);
}
function SalvarForm() {
    const inputemail = document.getElementById("pergunta");
    const inputpassword = document.getElementById("resposta");
    saveLocalStorage("pergunta", inputemail.value);
    saveLocalStorage("resposta", inputpassword.value);

}
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
