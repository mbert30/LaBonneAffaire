package com.example.leboncoup

import com.google.gson.annotations.SerializedName

class ConnexionCompteFormat() {
    @SerializedName("email")
    var email: String? = null

    @SerializedName("mdp")
    var mdp: String? = null
}
