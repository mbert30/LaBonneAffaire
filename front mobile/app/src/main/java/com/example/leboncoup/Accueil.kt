package com.example.leboncoup

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.*
import com.example.logiactivity.JWTToken
import com.example.logiactivity.Tools
import com.google.gson.JsonObject
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class Accueil : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_accueil)
        val authService = AuthService()
        var jwt = JWTToken.getInstance(this)
        var listeView = findViewById<ListView>(R.id.listeView)
        var SpinnerCategorie = findViewById<Spinner>(R.id.SpinnerCategorie)
        var EditTextRecherche = findViewById<EditText>(R.id.EditTextRecherche)
        var ButtonRecherche = findViewById<Button>(R.id.ButtonRecherche)
        var progressBar = findViewById<ProgressBar>(R.id.progressBar)
        val tools = Tools()

        if(jwt.isEmpty())
        {
            var intent = Intent(this@Accueil, MainActivity::class.java)
            startActivity(intent)
        }
        Thread {
            runOnUiThread {
                authService.annonce.afficherCategorie(jwt.tokenLogin)
                    .enqueue(object : Callback<List<Categorie>> {
                        override fun onResponse(call: Call<List<Categorie>>, response: Response<List<Categorie>>) {
                            if(response.code() == 200) {
                                var categorie = response.body()!!
                                var arrayAdapter = ArrayAdapter(this@Accueil, android.R.layout.simple_dropdown_item_1line, categorie)
                                SpinnerCategorie.adapter = arrayAdapter
                            }
                            else {

                            }
                        }
                        override fun onFailure(call: Call<List<Categorie>>, t: Throwable) {

                        }
                    })
            }
        }.start()

        Thread {
            runOnUiThread {
                val paramObject = JsonObject()
                paramObject.addProperty("categorie", 0)
                paramObject.addProperty("recherche", "")
                authService.annonce.rechecheAnnonce(jwt.tokenLogin, paramObject)
                    .enqueue(object : Callback<List<Annonce>> {
                        override fun onResponse(call: Call<List<Annonce>>, response: Response<List<Annonce>>) {
                            var annonce = response.body()!!
                            var arrayAdapter = ArrayAdapter(this@Accueil, android.R.layout.simple_list_item_1, annonce)
                            listeView.adapter = arrayAdapter
                        }

                        override fun onFailure(call: Call<List<Annonce>>, t: Throwable) {

                        }

                    })
            }
        }.start()

        ButtonRecherche.setOnClickListener {
            Thread {
                runOnUiThread {
                    val paramObject = JsonObject()
                    paramObject.addProperty("categorie",SpinnerCategorie.selectedItemId + 1)
                    paramObject.addProperty("recherche", EditTextRecherche.text.toString())
                    authService.annonce.rechecheAnnonce(jwt.tokenLogin, paramObject)
                        .enqueue(object : Callback<List<Annonce>> {
                            override fun onResponse(call: Call<List<Annonce>>, response: Response<List<Annonce>>) {
                                var annonce = response.body()!!
                                var arrayAdapter = ArrayAdapter(this@Accueil, android.R.layout.simple_list_item_1, annonce)
                                listeView.adapter = arrayAdapter

                            }

                            override fun onFailure(call: Call<List<Annonce>>, t: Throwable) {

                            }

                        })
                }
            }.start()
        }
    }
}