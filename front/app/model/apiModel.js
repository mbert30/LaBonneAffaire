import Api from "../services/api.js"
export default class ApiModel
{
    constructor() {
        this.api = new Api()
    }
    async creerUtilisateur(email, nom, prenom, mdp)
    {
        try {
            return await this.api.creerUtilisateur(email, nom, prenom, mdp)
        } catch {
            return undefined
        }
    }
    async connexionUtilisateur(email, mdp)
    {
        try {
            let retour = await this.api.connexionUtilisateur(email, mdp)
            sessionStorage.setItem("token", retour.token)
            sessionStorage.setItem("ID_Utilisateur", retour.ID_Utilisateur)
            document.location.href="./Accueil.html";
        } catch (error) {
            if(error == 401)
            {
                document.getElementById("messageDanger").innerHTML = "Adresse mail ou mot de passe incorrect"
                document.getElementById("messageDanger").style = ""
                return 401
            }
            return;
        }
    }

    async recupererInfoUtilisateur(ID_Utilisateur, token)
    {
        let retour = await this.api.recupererInfoUtilisateur(ID_Utilisateur, token)
        return retour
    }

    async derniereAnnonce()
    {
        try {
            let retour = await this.api.derniereAnnonce()
            return retour
        } catch (error) {
            console.log(error)
        }
    }

    async updateUser(id, nom, prenom, adresseEmail, adressePostal, complementAdresse, Ntel, token)
    {
        try {
            let retour = await this.api.updateUser(id, nom, prenom, adresseEmail, adressePostal, complementAdresse, Ntel, token)
            return retour
        } catch (error) {
            console.log(error)
        }
    }

    async chargementAnnonce(categorie, recherche, token) 
    {
        let retour = await this.api.chargementAnnonce(categorie, recherche, token)
        return retour
    }

    async recupererInfoAnnonce(ID_Annonce, token)
    {
        let retour = await this.api.recupererInfoAnnonce(ID_Annonce, token)
        return retour
    }

    async nouvelleAnnonce(libelleAnnonce, descriptionAnnonce, prix, ID_Categorie, PossibleNego, ID_Utilisateur, token)
    {
        let retour = await this.api.nouvelleAnnonce(libelleAnnonce, descriptionAnnonce, prix, ID_Categorie, PossibleNego, ID_Utilisateur, token)
        return retour
    }

    async afficherCategorie(token)
    {
        let retour = await this.api.afficherCategorie(token)
        return retour
    }

    async nouveauCommentaireAnnonce(ID_Annonce, ID_Utilisateur, message, token)
    {
        let retour = await this.api.nouveauCommentaireAnnonce(ID_Annonce, ID_Utilisateur, message, token)
        return retour
    }

    async afficherCommentaireAnnonce(ID_Annonce, token)
    {
        let retour = await this.api.afficherCommentaireAnnonce(ID_Annonce, token)
        return retour
    }
}