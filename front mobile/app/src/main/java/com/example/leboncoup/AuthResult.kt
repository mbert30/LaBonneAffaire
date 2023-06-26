package com.example.leboncoup

import com.google.gson.annotations.SerializedName

class AuthResult {
    @SerializedName("token")
    var token : String? = null

    @SerializedName("ID_Utilisateur")
    var ID_Utilisateur : Int? = null
}