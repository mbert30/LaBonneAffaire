export default class Api
{
    constructor() {
        this.baseurl = "http://localhost:3000"
    }
    myFetch(url, init) {
        return new Promise(((resolve, reject) => {
            fetch(`${this.baseurl}/${url}`, init)
                .then(response => {
                    if (response.status === 200) {
                        resolve(response.json())
                    } else {
                        reject(response.status)
                    }
                })
                .catch(err => reject(err))
        }))
    }
    creerUtilisateur(email, nom, prenom, mdp)
    {
        console.log(`fetch`)
        return this.myFetch('users/createUser', {
            method: "POST",
            body: JSON.stringify({
                email: email,
                nom: nom,
                prenom: prenom,
                mdp: mdp
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
    }

    connexionUtilisateur(email, mdp)
    {
        return this.myFetch('auth/login', {
            method: "POST",
            body: JSON.stringify({
                email: email,
                mdp: mdp
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
    }

    recupererInfoUtilisateur(ID_Utilisateur, token)
    {
        return this.myFetch('users/getInfoUser', {
            method: "POST",
            body: JSON.stringify({
                "ID_Utilisateur": ID_Utilisateur
            }),
            headers: {"Content-type": "application/json; charset=UTF-8", "Authorization" : `Bearer ${token}`}
        })
    }

    derniereAnnonce()
    {
        console.log(`fetch`)
        return this.myFetch('annonce/derniereAnnonce', {
            method: "GET",
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
    }

    updateUser(id, nom, prenom, adresseEmail, adressePostal, complementAdresse, Ntel, token)
    {
        return this.myFetch('users/updateUser', {
            method: "PUT",
            body: JSON.stringify({
                "ID_Utilisateur": id,
                "nom": nom,
                "prenom": prenom,
                "adresseEmail": adresseEmail,
                "adressePostal": adressePostal,
                "complementAdresse": complementAdresse,
                "Ntel": Ntel
            }),
            headers: {"Content-type": "application/json; charset=UTF-8", "Authorization" : `Bearer ${token}`}
        })
    }
    chargementAnnonce(categorie, recherche, token) 
    {
        return this.myFetch('annonce/rechercheAnnonce', {
            method: "POST",
            body: JSON.stringify({
                "categorie": categorie,
                "recherche": recherche
            }),
            headers: {"Content-type": "application/json; charset=UTF-8", "Authorization" : `Bearer ${token}`}
        })
    }

    recupererInfoAnnonce(ID_Annonce, token)
    {
        return this.myFetch('annonce/recupererInfoAnnonce', {
            method: "POST",
            body: JSON.stringify({  
                "ID_Annonce": ID_Annonce,
            }),
            headers: {"Content-type": "application/json; charset=UTF-8", "Authorization" : `Bearer ${token}`}
        })
    }

    nouvelleAnnonce(libelleAnnonce, descriptionAnnonce, prix, ID_Categorie, PossibleNego, ID_Utilisateur, token)
    {
        return this.myFetch('annonce/nouvelleAnnonce', {
            method: "POST",
            body: JSON.stringify({
                "libelleAnnonce": libelleAnnonce,
                "descriptionAnnonce": descriptionAnnonce,
                "prix": prix,
                "ID_Categorie": ID_Categorie,
                "PossibleNego": PossibleNego,
                "ID_Utilisateur": ID_Utilisateur
            }),
            headers: {"Content-type": "application/json; charset=UTF-8", "Authorization" : `Bearer ${token}`}
        })
    }

    afficherCategorie(token)
    {
        return this.myFetch('annonce/afficherCategorie', {
            method: "GET",
            headers: {"Content-type": "application/json; charset=UTF-8", "Authorization" : `Bearer ${token}`}
        })
    }

    nouveauCommentaireAnnonce(ID_Annonce, ID_Utilisateur, message, token)
    {
        return this.myFetch('commentaire/creationCommentaire', {
            method: "POST",
            body: JSON.stringify({
                "ID_Annonce" : ID_Annonce,
                "ID_Utilisateur" : ID_Utilisateur,
                "TexteCommentaire" : message
            }),
            headers: {"Content-type": "application/json; charset=UTF-8", "Authorization" : `Bearer ${token}`}
        })
    }

    afficherCommentaireAnnonce(ID_Annonce, token)
    {
        return this.myFetch('commentaire/recupererCommentaire', {
            method: "POST",
            body: JSON.stringify({
                "ID_Annonce": ID_Annonce
            }),
            headers: {"Content-type": "application/json; charset=UTF-8", "Authorization" : `Bearer ${token}`}
        })
    }
}