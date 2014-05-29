/**
 * Created by Sebastian on 28.05.14.
 */
importScripts("/../js/jquery-2.1.1.mini.js")

function validEmail(email) {

    var strReg = "^([a-zA-Z0-9_\.\-])+\@([a-zA-Z0-9\-])+\.([a-zA-Z0-9]{2,4})+$";

    var regex = new RegExp(strReg);

    return(regex.test(email));

}

function validName(name) {

    var strReg = "^([a-zA-ZÖÄÜöäü])+$";

    var regex = new RegExp(strReg);

    return(regex.test(name));

}

function validMatrikelnummer(matrNr) {

    var strReg = "^([0-9]{7,7})+$";

    var regex = new RegExp(strReg);

    return(regex.test(matrNr));

}


function validHandynummer(mobilNr) {

    var strReg = "^0+([0-9]{10,11})+$";

    var regex = new RegExp(strReg);

    return(regex.test(mobilNr));

}

function checkForm(){

        var fehlerAusgabe='';


    if ($("input[name=handynummer]").val()==''){
        fehlerAusgabe = "Feld Handynummer ist leer\n"+fehlerAusgabe
        $("input[name=handynummer]").css("borderColor","red");
        $("input[name=handynummer]").focus();
    }
    else if (!validHandynummer($("input[name=handynummer]").val())){
        fehlerAusgabe = "Ihr Handynummer wurde nicht korrekt eingetragen!\n"+fehlerAusgabe;
        $("input[name=handynummer]").css("borderColor","red");
        $("input[name=handynummer]").focus();
    }
    else{
        $("input[name=handynummer]").css("borderColor","transparent");
    }



    if ($("input[name=matrikelnummer]").val()==""){
        fehlerAusgabe = "Feld Matrikelnummer ist leer\n"+fehlerAusgabe;
        $("input[name=matrikelnummer]").css("borderColor","red");
        $("input[name=matrikelnummer]").focus();
    }
    else if (!validMatrikelnummer($("input[name=matrikelnummer]").val())){
        fehlerAusgabe = "Ihr Matrikelnummer wurde nicht korrekt eingetragen!\n"+fehlerAusgabe;
        $("input[name=matrikelnummer]").css("borderColor","red");
        $("input[name=matrikelnummer]").focus();
    }
    else{
        $("input[name=matrikelnummer]").css("borderColor","transparent");
    }



    if ($("input[name=mail]").val()==""){
        fehlerAusgabe = "Feld E-Mail ist leer\n"+fehlerAusgabe;
        $("input[name=mail]").css("borderColor","red");
        $("input[name=mail]").focus();
    }
    else if (!validEmail($("input[name=mail]").val())){
        fehlerAusgabe = "In der E-Mail-Adresse wurde nicht korrekt eingetragen!\n"+fehlerAusgabe;
        $("input[name=mail]").css("borderColor","red");
        $("input[name=mail]").focus();
    }
    else{
        $("input[name=mail]").css("borderColor","transparent");
    }




    if ($("input[name=nachname]").val()==""){
        fehlerAusgabe = "Feld Nachname ist leer\n"+fehlerAusgabe;
        $("input[name=nachname]").css("borderColor","red");
        $("input[name=nachname]").focus();
    }
    else if (!validName($("input[name=nachname]").val())){
        fehlerAusgabe = "Ihr Nachname wurde nicht korrekt eingetragen!\n"+fehlerAusgabe;
        $("input[name=nachname]").css("borderColor","red");
        $("input[name=nachname]").focus();
    }
    else{
        $("input[name=nachname]").css("borderColor","transparent");
    }



    if ($("input[name=vormane]").val()==""){
        fehlerAusgabe = "Feld Vorname ist leer\n"+fehlerAusgabe;
        $("input[name=vorname]").css("borderColor","red");
        $("input[name=vorname]").focus();
    }
    else if (!validName($("input[name=vorname]").val())){
        fehlerAusgabe = "Ihr Vorname wurde nicht korrekt eingetragen!\n"+fehlerAusgabe;
        $("input[name=vorname]").css("borderColor","red");
        $("input[name=vorname]").focus();
    }
    else{
        $("input[name=vorname]").css("borderColor","transparent");
    }


        if (fehlerAusgabe.length>0) {

            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben\n\nFestgestellte Probleme: \n\n"+fehlerAusgabe);

            return(false);
        }
}