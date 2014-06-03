function checkForm() {
    var gueltig = true;
    var handyRegEx = "0+([0-9])";
    var matrikelRegEx = "([0-9]){7}";
    var mailRegEx = "^[a-zA-Z0-9äöü._%+-]+@[a-zA-Z0-9äöüÄÖÜ.-]+.[com|de|org|net]$";
    var nachnameRegEx = "([a-zA-ZäöüÄÖÜ])+";
    var vornameRegEx = "([a-zA-ZäöüÄÖÜ])+";

    if (!$("#handynummer").val().match(handyRegEx)) {
        borderColor(handynummer);
        handynummer.focus();
        gueltig = false;
    }

    if (!$("#matrikelnummer").val().match(matrikelRegEx)) {
        borderColor(matrikelnummer);
        matrikelnummer.focus();
        gueltig = false;
    }

    if (!$("#mail").val().match(mailRegEx)) {
        borderColor(mail);
        mail.focus();
        gueltig = false;
    }

    if (!$("#nachname").val().match(nachnameRegEx)) {
        borderColor(nachname);
        nachname.focus();
        gueltig = false;
    }

    if (!$("#vorname").val().match(vornameRegEx)) {
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
    $( v ).addClass("red");
}