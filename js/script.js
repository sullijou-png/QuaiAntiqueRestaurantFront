const tokenCookieName = "acces-token";
const roleCookieName = "role";
const signOutBtn = document.getElementById("signout-btn");

signOutBtn.addEventListener("click", signout);

function getRole() {
    return getCookie(roleCookieName);
}

function signout() {
    eraseCookie(tokenCookieName);
    eraseCookie(roleCookieName);
    alert("Vous êtes déconnecté !");

    window.location.reload("/");
}

function setToken(token) {
    setCookie(tokenCookieName, token, 7); // Le token est valide pendant 7 jours
}

function getToken() {
    return getCookie(tokenCookieName);
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function isConnected() {
    if (getToken() == null || getToken() == undefined) {
        return false;
    } else {
        return true;
    }
}

function showAndHideElementsForRoles() {
    const userConnected = isConnected();
    const userRole = getRole();

    let allElementsToEdit = document.querySelectorAll("[data-show]");

    allElementsToEdit.forEach(element => {
        switch(element.dataset.show){
            case 'disconnected':
                if(userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'connected':
                if(!userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'admin':
                if(!userConnected || userRole !== 'admin'){
                    element.classList.add("d-none");
                }
                break;
            case 'client':
                if(!userConnected || userRole !== 'client'){
                    element.classList.add("d-none");
                }
                break;
        }
    });
}
