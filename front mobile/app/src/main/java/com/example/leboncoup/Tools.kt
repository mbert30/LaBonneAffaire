package com.example.logiactivity

import android.app.AlertDialog
import android.content.Context

class Tools {

    fun displayError(context : Context, int : Int) {
        val alert = AlertDialog.Builder(context, int)
        if(int == 200)
        {
            alert.setTitle("Code $int")
            alert.setMessage("Vous êtes connecté")
            alert.setNeutralButton("ok") { dialog, _ ->  dialog.dismiss()}
        }
        else if(int == 1)
        {
            alert.setTitle("Code $int")
            alert.setMessage("Problème de connexion")
            alert.setNeutralButton("ok") { dialog, _ ->  dialog.dismiss()}
        }
        else {
            alert.setTitle("ERROR $int")
            alert.setMessage("Attention, il y a un problème")
            alert.setNeutralButton("ok") { dialog, _ ->  dialog.dismiss()}
        }
        alert.show()
    }
}