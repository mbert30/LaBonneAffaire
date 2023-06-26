package com.example.logiactivity

import android.content.Context
import android.content.SharedPreferences

class JWTToken(context: Context) {
    companion object {
        @Volatile
        private var INSTANCE: JWTToken? = null

        fun getInstance(context: Context): JWTToken {
            return INSTANCE ?: synchronized(this) {
                INSTANCE ?: JWTToken(context).also { INSTANCE = it }
            }
        }
    }
    private val sharedPreferences : SharedPreferences = context.getSharedPreferences("Test", Context.MODE_PRIVATE)
    var tokenLogin : String? = sharedPreferences.getString("token", "Bearer ")

    fun setToken(valeur : String?)
    {
        val edit: SharedPreferences.Editor = sharedPreferences.edit()
        edit.putString("token", "Bearer $valeur")
        edit.apply()
        tokenLogin = "Bearer $valeur"
    }
    fun isEmpty() : Boolean
    {
        return tokenLogin == "Bearer "
    }
}