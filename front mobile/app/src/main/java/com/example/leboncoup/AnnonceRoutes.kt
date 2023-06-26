package com.example.leboncoup

import com.google.gson.JsonObject
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.Header
import retrofit2.http.POST

interface AnnonceRoutes {
    @POST("/annonce/rechercheAnnonce")
    fun rechecheAnnonce(@Header("Authorization") token : String?, @Body body: JsonObject): Call<List<Annonce>>

    @GET("/annonce/afficherCategorie")
    fun afficherCategorie(@Header("Authorization") token : String?): Call<List<Categorie>>
}
