import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "Galerie", "/pages/galerie.html", []),
    new Route("/signin", "Sign In", "/pages/auth/signin.html", [], "/js/signin.js"),
    new Route("/signup","Inscription", "/pages/auth/signup.html", [], "/js/signup.js"),
    new Route("/account", "Mon Compte", "/pages/auth/account.html", ["admin", "client"]),
    new Route("/editPassword", "Modifier mon mot de passe", "/pages/auth/editPassword.html", ["admin", "client"]),
    new Route("/allResa", "Réservation", "/pages/reservations/allResa.html", ["client"]),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["client"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";