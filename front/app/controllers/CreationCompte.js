import BaseController from './basecontroller.js'
import ApiModel from '../model/apiModel.js'
class CreationCompteController extends BaseController
{
    constructor() {
        super()
        this.model = new ApiModel()
    }
    verifFormulaire()
    {
        const danger = document.getElementById("messageDanger")
        let email = document.getElementById("Email").value
        let nom = document.getElementById("Nom").value
        let prenom = document.getElementById("Prenom").value
        let mdp = document.getElementById("Mdp").value
        let confirmMdp = document.getElementById("MdpComfirm").value

        if(this.verifFormulaireNouveauCompte(email, nom, prenom, mdp, confirmMdp))
        {
            danger.style="display: none;"
            console.log("test valide")
            this.model.creerUtilisateur(email, nom, prenom, mdp)
            document.location.href="./ConnexionCompte.html";
        }else
        {
            danger.style= ""
        }
    }
    verifFormulaireNouveauCompte(email, nom, prenom, mdp, confirmMdp)
    {
        const danger = document.getElementById("messageDanger")
        var pattern = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i;

        if(email == '' || nom =='' || prenom == '' || mdp == '' || confirmMdp == '')
        {
            danger.innerHTML = 'Attention ! Il faut remplir tous les champs';
            danger.style = ''
            return false
        }
        else{
            if(!pattern.test(email))
            {
                danger.innerHTML = 'L\'adresse n\'est pas valide';
                danger.style = ''
                return false
            }
            else
            {
                if(!(mdp == confirmMdp))
                {
                    danger.innerHTML = 'Les mots de passe ne sont pas identiques';
                    danger.style = ''
                    return false
                }
                else
                {
                    danger.innerHTML = 'Bravoooo';
                    danger.style = ''
                    return true
                }
            }
        }
    }
}

export default CreationCompteController
