package com.example.leboncoup

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.ProgressBar
import com.example.logiactivity.Tools
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import android.util.Log
import android.widget.Toast
import com.example.logiactivity.JWTToken
import com.google.gson.JsonObject

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val buttonConnexion = findViewById<Button>(R.id.buttonConnexion)
        val editTextLogin = findViewById<EditText>(R.id.editTextLogin)
        val editTextPassword = findViewById<EditText>(R.id.editTextPassword)
        val progressBar = findViewById<ProgressBar>(R.id.progressBar)
        val authService = AuthService()
        val tools = Tools()
        val jwtToken = JWTToken.getInstance(this@MainActivity)

        buttonConnexion.setOnClickListener {
            val paramObject = JsonObject()
            paramObject.addProperty("email", editTextLogin.text.toString())
            paramObject.addProperty("mdp", editTextPassword.text.toString())
            Thread {
                runOnUiThread {
                    authService.user.login(paramObject)
                        .enqueue(object : Callback<AuthResult> {
                            override fun onResponse(call: Call<AuthResult>, response: Response<AuthResult>) {
                                if(response.code() == 200) {
                                    Log.w("oui", "oui")
                                    jwtToken.setToken(response.body()?.token)
                                    var intent = Intent(this@MainActivity, Accueil::class.java)
                                    Toast.makeText(this@MainActivity, "Vous êtes connecté", Toast.LENGTH_SHORT).show()
                                    startActivity(intent)
                                }
                                else {
                                    tools.displayError(this@MainActivity, 1)
                                }
                            }

                            override fun onFailure(call: Call<AuthResult>, t: Throwable) {
                                tools.displayError(this@MainActivity, 1)
                            }
                        })
                }
            }.start()
        }
    }

}