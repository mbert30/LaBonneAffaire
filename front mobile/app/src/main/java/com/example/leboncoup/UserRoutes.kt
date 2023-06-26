package com.example.leboncoup

import com.google.gson.JsonObject
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.POST

interface UserRoutes {

    @POST("/auth/login")
    fun login(@Body body : JsonObject) : Call<AuthResult>
}