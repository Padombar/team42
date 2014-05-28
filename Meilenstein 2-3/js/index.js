/**
 * Created by Sebastian on 28.05.14.
 */


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


        var focusarray = new Array(5);
        var fehlerAusgabe='';


    if (document.forms[0].handynummer.value==""){
        fehlerAusgabe = "Feld Handynummer ist leer\n"+fehlerAusgabe
        document.forms[0].handynummer.style.borderColor = "red";
        document.forms[0].handynummer.focus();
    }
    else if (!validHandynummer(document.forms[0].handynummer.value)){
        fehlerAusgabe = "Ihr Handynummer wurde nicht korrekt eingetragen!\n"+fehlerAusgabe;
        document.forms[0].handynummer.style.borderColor = "red";
        document.forms[0].handynummer.focus();
    }
    else{
        document.forms[0].handynummer.style.borderColor = "transparent";
    }



    if (document.forms[0].matrikelnummer.value==""){
        fehlerAusgabe = "Feld Matrikelnummer ist leer\n"+fehlerAusgabe;
        document.forms[0].matrikelnummer.style.borderColor = "red";
        document.forms[0].matrikelnummer.focus();
    }
    else if (!validMatrikelnummer(document.forms[0].matrikelnummer.value)){
        fehlerAusgabe = "Ihr Matrikelnummer wurde nicht korrekt eingetragen!\n"+fehlerAusgabe;
        document.forms[0].matrikelnummer.style.borderColor = "red";
        document.forms[0].matrikelnummer.focus();
    }
    else{
        document.forms[0].matrikelnummer.style.borderColor = "transparent";
    }



    if (document.forms[0].mail.value==""){
        fehlerAusgabe = "Feld E-Mail ist leer\n"+fehlerAusgabe;
        document.forms[0].mail.style.borderColor = "red";
        document.forms[0].mail.focus();
    }
    else if (!validEmail(document.forms[0].mail.value)){
        fehlerAusgabe = "In der E-Mail-Adresse wurde nicht korrekt eingetragen!\n"+fehlerAusgabe;
        document.forms[0].mail.style.borderColor = "red";
        document.forms[0].mail.focus();
    }
    else{
        document.forms[0].mail.style.borderColor = "transparent";
    }




    if (document.forms[0].nachname.value==""){
        fehlerAusgabe = "Feld Nachname ist leer\n"+fehlerAusgabe;
        document.forms[0].nachname.style.borderColor = "red";
        document.forms[0].nachname.focus();
    }
    else if (!validName(document.forms[0].nachname.value)){
        fehlerAusgabe = "Ihr Nachname wurde nicht korrekt eingetragen!\n"+fehlerAusgabe;
        document.forms[0].nachname.style.borderColor = "red";
        document.forms[0].nachname.focus();
    }
    else{
        document.forms[0].nachname.style.borderColor = "transparent";
    }



    if (document.forms[0].vorname.value==""){
        fehlerAusgabe = "Feld Vorname ist leer\n"+fehlerAusgabe;
        document.forms[0].vorname.style.borderColor = "red";
        document.forms[0].vorname.focus();
    }

    else if (!validName(document.forms[0].vorname.value)){
        fehlerAusgabe = "Ihr Vorname wurde nicht korrekt eingetragen!\n"+fehlerAusgabe;
        document.forms[0].vorname.style.borderColor = "red";
        document.forms[0].vorname.focus();
    }

    else{
        document.forms[0].vorname.style.borderColor = "transparent";
    }


        if (fehlerAusgabe.length>0) {

            alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben\n\nFestgestellte Probleme: \n\n"+fehlerAusgabe);

            return(false);

        }

}