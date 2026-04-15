document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    // reset errori
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.getElementById("successMsg").textContent = "";

    // campi
    let nome = document.getElementById("nome").value.trim();
    let cognome = document.getElementById("cognome").value.trim();
    let data = document.getElementById("dataNascita").value;
    let luogo = document.getElementById("luogoNascita").value.trim();
    let email = document.getElementById("email").value.trim();
    let email2 = document.getElementById("email2").value.trim();
    let password = document.getElementById("password").value;

    // controlli campi vuoti
    if (!nome) {
        document.getElementById("errNome").textContent = "Inserisci il nome";
        valid = false;
    }

    if (!cognome) {
        document.getElementById("errCognome").textContent = "Inserisci il cognome";
        valid = false;
    }

    if (!data) {
        document.getElementById("errData").textContent = "Inserisci la data di nascita";
        valid = false;
    }

    if (!luogo) {
        document.getElementById("errLuogo").textContent = "Inserisci il luogo di nascita";
        valid = false;
    }

    if (!email) {
        document.getElementById("errEmail").textContent = "Inserisci la email";
        valid = false;
    }

    if (!email2) {
        document.getElementById("errEmail2").textContent = "Conferma la email";
        valid = false;
    }

    // controllo email uguali
    if (email && email2 && email !== email2) {
        document.getElementById("errEmail2").textContent = "Le email non coincidono";
        valid = false;
    }

    // regex password
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[,!£$&%§]).{8,}$/;

    if (!password) {
        document.getElementById("errPassword").textContent = "Inserisci la password";
        valid = false;
    } else if (!regex.test(password)) {
        document.getElementById("errPassword").textContent =
            "Min 8 caratteri, con maiuscola, minuscola, numero e simbolo (,!£$&%§)";
        valid = false;
    }

    // successo
    if (valid) {
        document.getElementById("successMsg").textContent = "Registrazione completata!";
    }
});