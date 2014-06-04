function checkForm() {
    /*
    Variable gueltig wird auf false gesetzt, wenn ein Ausdruck falsch ist
     */
    var gueltig = true;

    /*
     * Reguläre Ausdrücke in Variablen gespeichert
     */
    var handyRegEx = "0+([0-9])";
    var matrikelRegEx = "([0-9]){7}";
    var mailRegEx = "^[a-zA-Z0-9äöü._%+-]+@[a-zA-Z0-9äöüÄÖÜ.-]+.[com|de|org|net]$";
    var nachnameRegEx = "([a-zA-ZäöüÄÖÜ])+";
    var vornameRegEx = "([a-zA-ZäöüÄÖÜ])+";

    /*
    Abfragen der einzelenen Felder
     */
    if (!$("#handy").val().match(handyRegEx)) {
        borderColor(handynummer);
        handynummer.focus();
        gueltig = false;
    }

    if (!$("#matrikelnr").val().match(matrikelRegEx)) {
        borderColor(matrikelnummer);
        matrikelnummer.focus();
        gueltig = false;
    }

    if (!$("#email").val().match(mailRegEx)) {
        borderColor(mail);
        mail.focus();
        gueltig = false;
    }

    if (!$("#name").val().match(nachnameRegEx)) {
        borderColor(nachname);
        nachname.focus();
        gueltig = false;
    }

    if (!$("#vorname").val().match(vornameRegEx)) {
        borderColor(vorname);
        vorname.focus();
        gueltig = false;
    }

    /*
    Ausgabe der Fehlermeldung, wenn gueltig auf false gesetzt wurde
     */
    if(gueltig == false ){
        alert('Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben')
    }

    return gueltig;
}

/*
Rahmenfarbe wird rot gefärbt bei falscher Eingabe
 */
function borderColor(v){
    $( v ).addClass("red");
}