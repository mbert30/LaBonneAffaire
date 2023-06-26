import BaseController from './basecontroller.js'
class NavbarController extends BaseController {
    constructor() {
        super()
        document.getElementById('navbar').innerHTML = 
        `<nav class="navbar navbar-expand-lg navbar-light bg-light"> 
            <div class="container-fluid"> 
                <a class="navbar-brand" href="Accueil.html"><img src="../res/logo.png" alt="logo.png" class="logoNavBar"></a> 
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="Accueil.html">Accueil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="ListeAnnonce.html">Liste des Annonces</a>
                        </li>
                        <div id="navbar-deco" class="navbar-deco">
                        </div>
                    </ul>
                </div>
            </div>
        </nav>`
    }
    changementNavbar()
    {
        if(sessionStorage.getItem("token") == null) {
            document.getElementById('navbar-deco').innerHTML = '<li class="nav-item"> <a class="nav-link active" aria-current="page" href="CreationCompte.html">Création Compte</a></li><li class="nav-item"><a class="nav-link active" aria-current="page" href="ConnexionCompte.html">Connexion</a></li>'
        } else {
            document.getElementById('navbar-deco').innerHTML = '<li class="nav-item"> <a class="nav-link active" aria-current="page" onclick="navbarController.deconnexion()">Déconnexion</a></li><li class="nav-item"><a class="nav-link active" aria-current="page" href="InfoCompte.html">InfoCompte</a></li>'
        }
    }
    deconnexion()
    {
        sessionStorage.clear()
        document.location.href="../views/Accueil.html"
    }
}

export default NavbarController
