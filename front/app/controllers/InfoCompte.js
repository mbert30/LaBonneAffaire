import BaseController from './basecontroller.js'
import ApiModel from '../model/apiModel.js'
class InfoCompteController extends BaseController {
    constructor() {
        super()
        if(sessionStorage.getItem("token") == null && sessionStorage.getItem("ID_Utilisateur") == null)
        {
            document.location.href="../views/Accueil.html"
        }
        else
        {
            this.model = new ApiModel()
            this.id = sessionStorage.getItem("ID_Utilisateur")
            this.token = sessionStorage.getItem("token")
            this.retour = new Array()
            if(sessionStorage.getItem("codeRetour") === '1')
            {
                sessionStorage.removeItem("codeRetour");
                document.getElementById('messageSuccess').style = ""
                document.getElementById('messageSuccess').innerHTML = "Vos information ont été modifier"

            }
            this.afficherInfoCompte()
        }
    }
    async afficherInfoCompte()
    {
        this.retour = await this.model.recupererInfoUtilisateur(this.id, this.token)
        console.log(this.retour)
        document.getElementById('nomBienvenue').innerHTML = this.retour.nom
        document.getElementById('nom').innerHTML = this.retour.nom
        document.getElementById('prenomBienvenue').innerHTML = this.retour.prenom
        document.getElementById('prenom').innerHTML = this.retour.prenom
        document.getElementById('email').innerHTML = this.retour.adresseEmail
        document.getElementById('adressePostal').innerHTML = this.retour.adressePostal
        document.getElementById('complementAdresse').innerHTML = this.retour.complementAdresse
        document.getElementById('Ntel').innerHTML = this.retour.Ntel
    }
    mettreAJour()
    {
        document.getElementById('messageSuccess').style = "display: none;"
        document.getElementById('messageDanger').style = "display: none;"
        let nom
        let prenom
        let adresseEmail
        let adressePostal
        let complementAdresse
        let Ntel

        if(this.retour.nom === 'Non renseigné') {
            nom = ''
        }
        else {
            nom = this.retour.nom
        }

        if(this.retour.prenom === 'Non renseigné') {
            prenom = ''
        }
        else {
            prenom = this.retour.prenom
        }

        if(this.retour.adresseEmail === 'Non renseigné') {
            adresseEmail = ''
        }
        else {
            adresseEmail = this.retour.adresseEmail
        }

        if(this.retour.adressePostal === 'Non renseigné') {
            adressePostal = ''
        }
        else {
            adressePostal = this.retour.adressePostal
        }

        if(this.retour.complementAdresse === 'Non renseigné') {
            complementAdresse = ''
        }
        else {
            complementAdresse = this.retour.complementAdresse
        }

        if(this.retour.Ntel === 'Non renseigné') {
            Ntel = ''
        }
        else {
            Ntel = this.retour.Ntel
        }

        document.getElementById('nom').innerHTML = `<input id='input-nom' value='${nom}'> </input>`
        document.getElementById('prenom').innerHTML = `<input id='input-prenom' value='${prenom}'> </input>`
        document.getElementById('email').innerHTML = `<input id='input-adresseEmail' value='${adresseEmail}'> </input>`
        document.getElementById('adressePostal').innerHTML = `<input id='input-adressePostal' value='${adressePostal}'> </input>`
        document.getElementById('complementAdresse').innerHTML = `<input id='input-complementAdresse' value='${complementAdresse}'> </input>`
        document.getElementById('Ntel').innerHTML = `<input id='input-Ntel' value='${Ntel}'> </input>`
        document.getElementById('button-MiseAJour').style = "display: none;"
        document.getElementById('button-Valider').style = ""
    }
    async validerInfo()
    {
        let nom = document.getElementById('input-nom').value
        let prenom = document.getElementById('input-prenom').value
        let adresseEmail = document.getElementById('input-adresseEmail').value
        let adressePostal = document.getElementById('input-adressePostal').value
        let complementAdresse = document.getElementById('input-complementAdresse').value
        let Ntel = document.getElementById('input-Ntel').value
        if(nom === '') {
            nom = 'Non renseigné'
        }

        if(prenom === '') {
            prenom = 'Non renseigné'
        }

        if(adresseEmail === '') {
            adresseEmail = 'Non renseigné'
        }

        if(adressePostal === '') {
            adressePostal = 'Non renseigné'
        }

        if(complementAdresse === '') {
            complementAdresse = 'Non renseigné'
        }

        if(Ntel === '') {
            Ntel = 'Non renseigné'
        }

        if(nom === this.retour.nom && prenom === this.retour.prenom && adresseEmail === this.retour.adresseEmail && adressePostal === this.retour.adressePostal && complementAdresse === this.retour.complementAdresse && Ntel === this.retour.Ntel)
        {
            document.location.href="../views/InfoCompte.html"
        }
        else {
            let codeRetour = await this.model.updateUser(this.id, nom, prenom, adresseEmail, adressePostal, complementAdresse, Ntel, this.token)
            console.log(codeRetour[0])
            if(codeRetour[0] === 1) {
                sessionStorage.setItem("codeRetour", codeRetour[0])
                document.getElementById('messageDanger').style = "display: none;"
                document.getElementById('messageSuccess').style = "display: none;"
                document.location.href="../views/InfoCompte.html"
            }
            else {
                document.getElementById('messageSuccess').style = "display: none;"
                document.getElementById('messageDanger').innerHTML = "Un problème a eu lieu lors de l'envoi des données, Veuillez réessayer plus tard"
                document.getElementById('messageDanger').style = ""
            }
        }
    }
}

export default InfoCompteController
