/**
 * Created by Sebastian on 28.05.14.
 */
importScripts("/../js/jquery-2.1.1.mini.js")

function validEmail(email) {

    var strReg = "^([a-zA-Z0-9_\.\-])+\@([a-zA-Z0-9\-])+\.([a-zA-Z0-9]{2,4})+jQuery";
    var regex = new RegExp(strReg);
    return(regex.test(email));
}

function validName(name) {

    var strReg = "^([a-zA-ZÖÄÜöäü])+jQuery";
    var regex = new RegExp(strReg);
    return(regex.test(name));
}

function validMatrikelnummer(matrNr) {

    var strReg = "^([0-9]{7,7})+jQuery";
    var regex = new RegExp(strReg);
    return(regex.test(matrNr));
}


function validhandy(mobilNr) {

    var strReg = "^0+([0-9]{10,11})+jQuery";
    var regex = new RegExp(strReg);
    return(regex.test(mobilNr));
}

function checkForm(){

    var fehlerAusgabe='';


    if (jQuery("input[name=handy]").val()==''){
        fehlerAusgabe = "Feld Handynummer ist leer\n"+fehlerAusgabe
        jQuery("input[name=handy]").css("borderColor","red");
        jQuery("input[name=handy]").focus();
    }
    else if (!validhandy(jQuery("input[name=handy]").val())){
        fehlerAusgabe = "Ihre Handynummer wurde nicht korrekt eingetragen!\n"+fehlerAusgabe;
        jQuery("input[name=handy]").css("borderColor","red");
        jQuery("input[name=handy]").focus();
    }
    else{
        jQuery("input[name=handy]").css("borderColor","transparent");
    }



    if (jQuery("input[name=matrikelnr]").val()==""){
        fehlerAusgabe = "Feld Matrikelnummer ist leer\n"+fehlerAusgabe;
        jQuery("input[name=matrikelnr]").css("borderColor","red");
        jQuery("input[name=matrikelnr]").focus();
    }
    else if (!validMatrikelnummer(jQuery("input[name=matrikelnr]").val())){
        fehlerAusgabe = "Ihr Matrikelnummer wurde nicht korrekt eingetragen!\n"+fehlerAusgabe;
        jQuery("input[name=matrikelnr]").css("borderColor","red");
        jQuery("input[name=matrikelnr]").focus();
    }
    else{
        jQuery("input[name=matrikelnr]").css("borderColor","transparent");
    }



    if (jQuery("input[name=email]").val()==""){
        fehlerAusgabe = "Feld E-Mail ist leer\n"+fehlerAusgabe;
        jQuery("input[name=email]").css("borderColor","red");
        jQuery("input[name=email]").focus();
    }
    else if (!validEmail(jQuery("input[name=email]").val())){
        fehlerAusgabe = "In der E-Mail-Adresse wurde nicht korrekt eingetragen!\n"+fehlerAusgabe;
        jQuery("input[name=email]").css("borderColor","red");
        jQuery("input[name=email]").focus();
    }
    else{
        jQuery("input[name=email]").css("borderColor","transparent");
    }




    if (jQuery("input[name=name]").val()==""){
        fehlerAusgabe = "Feld Nachname ist leer\n"+fehlerAusgabe;
        jQuery("input[name=name]").css("borderColor","red");
        jQuery("input[name=name]").focus();
    }
    else if (!validName(jQuery("input[name=name]").val())){
        fehlerAusgabe = "Ihr Nachname wurde nicht korrekt eingetragen!\n"+fehlerAusgabe;
        jQuery("input[name=name]").css("borderColor","red");
        jQuery("input[name=name]").focus();
    }
    else{
        jQuery("input[name=nachname]").css("borderColor","transparent");
    }



    if (jQuery("input[name=vormane]").val()==""){
        fehlerAusgabe = "Feld Vorname ist leer\n"+fehlerAusgabe;
        jQuery("input[name=vorname]").css("borderColor","red");
        jQuery("input[name=vorname]").focus();
    }
    else if (!validName(jQuery("input[name=vorname]").val())){
        fehlerAusgabe = "Ihr Vorname wurde nicht korrekt eingetragen!\n"+fehlerAusgabe;
        jQuery("input[name=vorname]").css("borderColor","red");
        jQuery("input[name=vorname]").focus();
    }
    else{
        jQuery("input[name=vorname]").css("borderColor","transparent");
    }



    if (fehlerAusgabe.length>0) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben\n\nFestgestellte Probleme: \n\n"+fehlerAusgabe);
        return(false);
    }
}