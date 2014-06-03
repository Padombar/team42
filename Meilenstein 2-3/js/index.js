function pruefen() {
    var gueltig = true;

    if (!$("#handynummer").val().match("0+([0-9])")) {
        borderColor(handynummer);
        handynummer.focus();
        gueltig = false;
    }

    if (!$("#matrikelnummer").val().match("([0-9]){7}")) {
        borderColor(matrikelnummer);
        matrikelnummer.focus();
        gueltig = false;
    }

    var filter = '^[a-zA-Z0-9äöü._%+-]+@[a-zA-Z0-9äöüÄÖÜ.-]+.[com|de|org|net]$';
    if (!$("#mail").val().match(filter)) {
        borderColor(mail);
        mail.focus();
        gueltig = false;
    }

    if (!$("#nachname").val().match("([a-zA-ZäöüÄÖÜ])+")) {
        borderColor(nachname);
        nachname.focus();
        gueltig = false;
    }

    if (!$("#vorname").val().match("([a-zA-ZäöüÄÖÜ])+")) {
        borderColor(vorname);
        vorname.focus();
        gueltig = false;
    }

    if(gueltig == false ){
        alert('Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben')
    }

    return gueltig;
}

function borderColor(v){
    v.style.borderColor = "red";
}