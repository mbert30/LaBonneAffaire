import BaseController from './basecontroller.js'
class NavbarController extends BaseController {
    constructor() {
        super()
        this.ouvert = false
        document.getElementById('navbar').innerHTML = `
        <div class="div-navPrincipal"> 
            <a class="" href="Accueil.html"><img src="../res/logo.png" alt="logo.png" class="img-logoNavBar"></a>
            <ul class="ul-navbar" id="ul-navbar">
                <li class="li-navItem">
                    <a class="a-navLink" href="Accueil.html">Accueil</a>
                </li>
                <li class="li-navItem">
                    <a class="a-navLink" href="ListeAnnonce.html">Liste des annonces </a>
                </li>
                <li class="li-navItem">
                    <a class="a-navLink" href="NouvelleAnnonce.html"> Créer sa propre annonce </a>
                </li>
                <li class="li-navItem" id="navbar-co">
                    
                </li>
                <li class="li-navItem" id="navbar-deco">
                    
                </li>
            </ul>
            <div class="icon">
                <button class="toggle" onclick="
                    if(!navbarController.ouvert){ 
                        document.getElementById('ul-navbar').style = 'display: unset;'; 
                        navbarController.ouvert = true;
                    } 
                    else { 
                        document.getElementById('ul-navbar').style = ''
                        navbarController.ouvert = false;
                    }
                ">☰</button>
            </div>
        </div>`
    }
    changementNavbar()
    {
        if(sessionStorage.getItem("token") == null) {
            document.getElementById('navbar-co').innerHTML = '<a class="a-navLink" href="CreationCompte.html">Création Compte</a>'
            document.getElementById('navbar-deco').innerHTML = '<a class="a-navLink" href="ConnexionCompte.html">Connexion</a>'
        } else {
            document.getElementById('navbar-co').innerHTML = '<a class="a-navLink" aria-current="page" onclick="navbarController.deconnexion()">Déconnexion</a>'
            document.getElementById('navbar-deco').innerHTML = '<a class="a-navLink" href="InfoCompte.html">InfoCompte</a>'
        }
    }
    deconnexion()
    {
        sessionStorage.clear()
        document.location.href="../views/Accueil.html"
    }

}

export default NavbarController
