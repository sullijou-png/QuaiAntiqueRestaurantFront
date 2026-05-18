export default class Route {
    constructor(url, title, pathHtml, authorized, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorized = authorized;
    }
}

/*
[ ] -> tout le monde peut accéder à la page
[admin] -> seul les admin peuvent accéder à la page
[client] -> reserver aux utilisateur au role client
[admin, client] -> les admin et les client peuvent accéder à la page
*/