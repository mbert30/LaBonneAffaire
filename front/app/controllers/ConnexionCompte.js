import BaseController from './basecontroller.js'
import ApiModel from '../model/apiModel.js'
class ConnexionCompteController extends BaseController
{
    constructor() {
        super()
        this.model = new ApiModel()
    }
    verifFormulaire()
    {
        const danger = document.getElementById("messageDanger")
        let email = document.getElementById("Email").value
        let mdp = document.getElementById("Mdp").value

        if(email !== "" && mdp !== "") {
            danger.style="display: none;"
            console.log("test valide")
            this.model.connexionUtilisateur(email, mdp)
        }else {
            danger.style= ""
        }
    }
}

export default ConnexionCompteController