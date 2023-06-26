import BaseController from './basecontroller.js'
import ApiModel from '../model/apiModel.js'
class ListeAnnonceController extends BaseController {
    constructor() {
        super()
        if(sessionStorage.getItem("token") == null && sessionStorage.getItem("ID_Utilisateur") == null)
        {
            document.location.href="../views/ConnexionCompte.html"
        }
        else
        {
            this.model = new ApiModel()
            this.token = sessionStorage.removeItem("ID_Annonce")
            this.token = sessionStorage.getItem("token")
            this.ID_Utilisateur = sessionStorage.getItem("ID_Utilisateur")
            this.divAnnonce = document.getElementById("ListeAnnonce")
            this.chargementAnnonce(0,'')
            this.categorie = document.getElementById('select-categorie')
            this.barreRecherche = document.getElementById('input-barreRecherche')
            this.afficherCategorie()
        }
    }
    
    async afficherCategorie()
    {
        let retour = await this.model.afficherCategorie(this.token)
        for(let categorie of retour)
        {
            this.categorie.innerHTML += `<option value=${categorie.ID_Categorie}> ${categorie.libelleCategorie} </option>`
        }
    }

    rechercherAnnonce()
    {
        console.log(this.categorie.value)
        console.log(this.barreRecherche.value)
        this.chargementAnnonce(this.categorie.value, this.barreRecherche.value)
    }

    async chargementAnnonce(categorie, recherche)
    {
        this.divAnnonce.innerHTML = ''
        let retour = await this.model.chargementAnnonce(parseInt(categorie), recherche, this.token)
        for(var annonce of retour)
        {
            let PossibleNego
            if(annonce.PossibleNego === true)
            {
                PossibleNego = 'Oui'
            }
            else {
                PossibleNego = 'Non'
            }
            this.divAnnonce.innerHTML += `<button class="AnnonceBoutton" onclick="listeAnnonceController.envoyerVersAnnonce(${annonce.ID_Annonce})">
                <div class="Annonce">
                    <div class="div-Annonce-image">
                        <img class="Annonce-image" src="../res/No_image_available.png">
                    </div>
                    <div class="div-Annonce-description">
                        <span class="Annonce-libelleAnnonce"> ${annonce.libelleAnnonce} </span>
                        <span class="Annonce-descriptionAnnonce"> Description : ${annonce.descriptionAnnonce} </span>
                        <span class="Annonce-prix"> Prix produit : ${annonce.prix}€ </span>
                    </div>
                    <div class="div-Annonce-description">
                        <span class="Annonce-ID_Utilisateur"> Vendu par : ${annonce.utilisateur.nom} ${annonce.utilisateur.prenom} </span>
                        <span class="Annonce-PossibleNego"> Possiblilité de négocier : ${PossibleNego} </span>
                        <span class="Annonce-ID_Categorie"> Catégorie : ${annonce.categorie.libelleCategorie} </span>
                    </div>
                </div>
            </button>`
        }
    }
    envoyerVersAnnonce(ID_Annonce)
    {
        sessionStorage.setItem("ID_Annonce", ID_Annonce)
        document.location.href="../views/Annonce.html"
    }
}


export default ListeAnnonceController
