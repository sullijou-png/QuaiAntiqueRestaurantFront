const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() { 
    // ici il fauda appeler une API pour vérifier les identifiants
    if (mailInput.value === "test@mail.fr" && passwordInput.value === "123") {
        alert("Vous êtes connecté !");
        
        // il faudra recupérer le token d'authentification et le stocker dans le localStorage ou les cookies pour les prochaines requêtes
        const token = "token_d_authentification_exemple";
        setToken(token);

        //placer le token en cookie

        setCookie(roleCookieName, "admin", 7); // Le rôle est valide pendant 7 jours
        // Identifiants corrects, rediriger vers la page d'accueil
        window.location.replace("/");
    } else {
        // Identifiants incorrects, afficher un message d'erreur
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
        alert("Identifiants incorrects");
    }
}