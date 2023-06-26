package com.example.leboncoup

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class AuthService {
    private val apiUrl = "http://192.168.1.39:3000"
    private val retrofit: Retrofit = Retrofit.Builder()
        .baseUrl(apiUrl)
        .addConverterFactory(GsonConverterFactory.create())
        .build()
    val user: UserRoutes = retrofit.create(UserRoutes::class.java)
    val annonce: AnnonceRoutes = retrofit.create(AnnonceRoutes::class.java)
}