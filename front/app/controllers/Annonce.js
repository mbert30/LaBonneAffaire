import BaseController from './basecontroller.js'
import ApiModel from '../model/apiModel.js'


class AnnonceController extends BaseController {
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
            this.ID_Annonce = sessionStorage.getItem("ID_Annonce")
            this.libelleAnnonce = document.getElementById('libelleAnnonce')
            this.descriptionAnnonce = document.getElementById('descriptionAnnonce')
            this.prix = document.getElementById('prix')
            this.champs_ID_Utilisateur = document.getElementById('ID_Utilisateur')
            this.PossibleNego = document.getElementById('PossibleNego')
            this.ID_Categorie = document.getElementById('ID_Categorie')
            this.CommentaireAnnonce = document.getElementById('CommentaireAnnonce')
            this.recupererInfoAnnonce()
            this.afficherCommentaireAnnonce()
        }
    }
    async recupererInfoAnnonce()
    {
        let retour = await this.model.recupererInfoAnnonce(this.ID_Annonce, this.token)

        let PossibleNegos
        if(retour[0].PossibleNego === true)
        {
            PossibleNegos = "Oui"
        }
        else {
            PossibleNegos = "Non"
        }

        this.libelleAnnonce.innerHTML = retour[0].libelleAnnonce
        this.descriptionAnnonce.innerHTML = retour[0].descriptionAnnonce
        this.prix.innerHTML = retour[0].prix
        this.champs_ID_Utilisateur.innerHTML = retour[0].utilisateur.nom + " " + retour[0].utilisateur.prenom
        this.PossibleNego.innerHTML = PossibleNegos
        this.ID_Categorie.innerHTML = retour[0].ID_Categorie
    }
    async evoyerMessage()
    {
        if(messageAnnonce.value == '')
        {
            console.log('commentaire vide')
        }
        else
        {
            console.log(parseInt(this.ID_Annonce))
            console.log(parseInt(this.ID_Utilisateur))
            console.log(this.ID_Utilisateur)
            console.log(messageAnnonce.value)
            let retour = await this.model.nouveauCommentaireAnnonce(parseInt(this.ID_Annonce), parseInt(this.ID_Utilisateur), messageAnnonce.value, this.token)
            console.log(retour)
            this.afficherCommentaireAnnonce()
        }
    }

    async afficherCommentaireAnnonce()
    {
        CommentaireAnnonce.innerHTML = ''
        let retour = await this.model.afficherCommentaireAnnonce(this.ID_Annonce, this.token)
        for(let commentaire of retour)
        {
            const date = new Date(commentaire.createdAt)
            const formattedDateTime = date.toLocaleDateString("fr");
            CommentaireAnnonce.innerHTML += `
                <div class="div-Commentaire">
                    <div class="div-InfoCommentaire">
                        <span id="UtilisateurNom"> ${commentaire.utilisateur.nom} </span>
                        <span id="UtilisateurPrenom"> ${commentaire.utilisateur.prenom} </span>
                        <span id="horodatage"> ${formattedDateTime} </span>
                    </div>
                    <div class="div-InfoCommentaire">
                        <span id="TexteCommentaire"> ${commentaire.TexteCommentaire} </span>
                    </div>
                </div>
            `
        }
        console.log(retour)
    }
}

export default AnnonceController
