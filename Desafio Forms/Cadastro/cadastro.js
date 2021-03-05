function saveLocalStorage(key, value) {
    localStorage.setItem(key, value);
    localStorage.setItem(key, value);
}
function login() {
    const inputemail = document.getElementById("usuario");
    const inputpassword = document.getElementById("dadossenha");
    saveLocalStorage("Email", inputemail.value);
    saveLocalStorage("Senha", inputpassword.value);
    alert("Cadastro Realizado Com Sucesso.");
}