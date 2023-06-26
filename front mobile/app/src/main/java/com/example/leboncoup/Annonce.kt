package com.example.leboncoup

import com.google.gson.annotations.SerializedName

class Annonce {

    @SerializedName("ID_Annonce")
    var ID_Annonce : Int? = null

    @SerializedName("libelleAnnonce")
    var libelleAnnonce : String? = null

    @SerializedName("descriptionAnnonce")
    var descriptionAnnonce : String? = null

    @SerializedName("prix")
    var prix : Int? = null

    @SerializedName("PossibleNego")
    var PossibleNego : Boolean? = null

    @SerializedName("ID_Categorie")
    var ID_Categorie : Int? = null

    override fun toString(): String {
        return "$ID_Annonce, $libelleAnnonce, $descriptionAnnonce, $prix, $PossibleNego, $ID_Categorie"
    }
}