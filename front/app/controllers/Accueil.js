import BaseController from './basecontroller.js'
import ApiModel from '../model/apiModel.js'
class AccueilController extends BaseController {
    constructor() {
        super()
        this.model = new ApiModel()
        this.divAnnonce = document.getElementById("derniereAnnonce")
        this.derniereAnnonce()
    }
    async derniereAnnonce()
    { 
        let retour = await this.model.derniereAnnonce()
        console.log(retour)
        for(var annonce of retour)
        {
            this.divAnnonce.innerHTML += 
            `<div class="div-AnnonceAccueil">
                <div class="div-AnnonceAccueil-image">
                    <img class="AnnonceAccueil-image" src="../res/No_image_available.png">
                </div>
                <div class="div-AnnonceAccueil-description">
                    <span class="AnnonceAccueil-nomProduit"> ${annonce.libelleAnnonce} </span>
                    <span class="AnnonceAccueil-prixProduit"> Prix produit : ${annonce.prix}€ </span>
                    <span class="AnnonceAccueil-ID_Utilisateur"> Vendu par : ${annonce.ID_Utilisateur} </span>
                </div>
            </div>`
        }
    }
}

export default AccueilController