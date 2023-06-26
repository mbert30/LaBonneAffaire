import BaseController from './basecontroller.js'
import ApiModel from '../model/apiModel.js'
class NouvelleAnnonceController extends BaseController {
    constructor() {
        super()
        if(sessionStorage.getItem("token") == null && sessionStorage.getItem("ID_Utilisateur") == null)
        {
            document.location.href="../views/ConnexionCompte.html"
        }
        else
        {
            this.model = new ApiModel()
            this.token = sessionStorage.getItem("token")
            this.ID_Utilisateur = sessionStorage.getItem("ID_Utilisateur")
            this.libelleAnnonce = document.getElementById('libelleAnnonce')
            this.descriptionAnnonce = document.getElementById('descriptionAnnonce')
            this.prix = document.getElementById('prix')
            this.PossibleNego = document.getElementById('PossibleNego')
            this.ID_Categorie = document.getElementById('ID_Categorie')
            this.afficherCategorie()
        }
    }

    async afficherCategorie()
    {
        let retour = await this.model.afficherCategorie(this.token)
        for(let categorie of retour)
        {
            console.log(categorie)
            this.ID_Categorie.innerHTML += `<option value=${categorie.ID_Categorie}> ${categorie.libelleCategorie} </option>`
        }
    }

    validerAnnonce() {
        console.log(this.PossibleNego.checked)
        if(this.libelleAnnonce.value != '' && this.descriptionAnnonce.value != '' && this.prix.value != '' && this.ID_Categorie.value != 0) {
            document.getElementById('messageDanger').style = "display: none;"
            document.getElementById('messageSuccess').style = "display: none;"
            this.model.nouvelleAnnonce(this.libelleAnnonce.value, this.descriptionAnnonce.value, this.prix.value, this.ID_Categorie.value, this.PossibleNego.checked, this.ID_Utilisateur, this.token)
            document.location.href="./ListeAnnonce.html";
        }
        else {
            document.getElementById('messageDanger').style = ""
            document.getElementById('messageSuccess').style = "display: none;"
            document.getElementById('messageDanger').innerHTML = "Attention ! Il faut remplir tous les champs"
        }
    } 
}


export default NouvelleAnnonceController
