package com.example.leboncoup

import com.google.gson.annotations.SerializedName

class Categorie {
    @SerializedName("ID_Categorie")
    var ID_Categorie : Int? = null

    @SerializedName("libelleCategorie")
    var libelleCategorie : String? = null

    override fun toString(): String {
        return "$libelleCategorie"
    }
}