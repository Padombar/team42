/* Tab Menuebereich
 * Die angeklickten Tabelle wird eingeblendet und alle anderen ausgeblendet.
 * Der Hintergrund des angeklickten Bereiches wird dunkelblau hinterlegt.
 */
function teilnehmerContent() {
    document.getElementById("teilnehmer").style.color = "#F9F9F9";
    document.getElementById("messe").style.color = "#000000";
    document.getElementById("teilnehmer").style.backgroundColor = "#3f47cc";
    document.getElementById("messe").style.backgroundColor = "transparent";
    document.getElementById("kostenTabelle").style.visibility = 'hidden';
    document.getElementById("teilnehmerTabBox").style.visibility = 'visible';
    document.getElementById("teilnehmerTabCebit").style.backgroundColor = "#00a4eb";
    document.getElementById("teilnehmerTabConhit").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabWebConTech").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabellen").style.visibility = 'visible';
    document.getElementById("cebitTabelle").style.visibility = 'visible';
    document.getElementById("conhitTabelle").style.visibility = 'hidden';
    document.getElementById("webtechconTabelle").style.visibility = 'hidden';
}

function kostenContent() {
    document.getElementById("teilnehmer").style.color = "#000000";
    document.getElementById("messe").style.color = "#F9F9F9";
    document.getElementById("teilnehmer").style.backgroundColor = "transparent";
    document.getElementById("messe").style.backgroundColor = "#3f47cc";
    document.getElementById("kostenTabelle").style.visibility = 'visible';
    document.getElementById("teilnehmerTabBox").style.visibility = 'hidden';
    document.getElementById("teilnehmerTabellen").style.visibility = 'hidden';
    document.getElementById("cebitTabelle").style.visibility = 'hidden';
    document.getElementById("conhitTabelle").style.visibility = 'hidden';
    document.getElementById("webtechconTabelle").style.visibility = 'hidden';
}

function cebitContent() {
    document.getElementById("teilnehmerTabCebit").style.backgroundColor = "#00a4eb";
    document.getElementById("teilnehmerTabConhit").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabWebConTech").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabellen").style.visibility = 'visible';
    document.getElementById("cebitTabelle").style.visibility = 'visible';
    document.getElementById("conhitTabelle").style.visibility = 'hidden';
    document.getElementById("webtechconTabelle").style.visibility = 'hidden';
}

function conhitContent() {
    document.getElementById("teilnehmerTabCebit").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabConhit").style.backgroundColor = "#00a4eb";
    document.getElementById("teilnehmerTabWebConTech").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabellen").style.visibility = 'visible';
    document.getElementById("cebitTabelle").style.visibility = 'hidden';
    document.getElementById("conhitTabelle").style.visibility = 'visible';
    document.getElementById("webtechconTabelle").style.visibility = 'hidden';
}

function webtechconContent() {
    document.getElementById("teilnehmerTabCebit").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabConhit").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabWebConTech").style.backgroundColor = "#00a4eb";
    document.getElementById("teilnehmerTabellen").style.visibility = 'visible';
    document.getElementById("cebitTabelle").style.visibility = 'hidden';
    document.getElementById("conhitTabelle").style.visibility = 'hidden';
    document.getElementById("webtechconTabelle").style.visibility = 'visible';
}

function loadPage(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}

/* JSON-Objekte */

var webtechJSON = JSON.parse(loadPage("/../team42/Meilenstein 2-3/getDetail.php?dateiname=webtech"));

var conhitJSON = JSON.parse(loadPage("/../team42/Meilenstein 2-3/getDetail.php?dateiname=conhit"));

var cebitJSON = JSON.parse(loadPage("/../team42/Meilenstein 2-3/getDetail.php?dateiname=cebit"));

var kostenJSON = JSON.parse(loadPage("/../team42/Meilenstein 2-3/getDetail.php?dateiname=kosten"));

/* Tabellen erstellen und mit JSON-Objekten beschreiben */
function kostenTabelle() {

    document.write('<table class ="kostentable" width="100%" border="1" cellpadding="5" cellspacing="0">');
    document.write(' <tr id ="kostentableheader"><th>Messe</th><th>Selbstkosten</th></tr>');

    for (i = 0; i < kostenJSON.kosten.length; i++) {
        document.write(' <tr><td>' + kostenJSON.kosten[i].Messe + '</td><td>' + kostenJSON.kosten[i].Selbstkostenanteil + ' €' + '</td></tr>');
    }
    document.write("</table>");
}

function cebitTabelle() {

    document.write('<table class="teilnehmertable" width="100%" border="1" cellpadding="5" cellspacing="0">');
    document.write(' <tr class="teilnehmertableheader"><th>Name</th><th>Vorname</th><th>Studiengang</th><th>eMail</th></tr>');

    for (i = 0; i < cebitJSON.cebit.length; i++) {
        document.write(' <tr><td>' + cebitJSON.cebit[i].name + '</td><td>' + cebitJSON.cebit[i].Vorname + '</td><td >' + '<span id="paddingLeft">' + cebitJSON.cebit[i].Studiengang + '</span>' + '</td><td>' + cebitJSON.cebit[i].eMail + '</td></tr>');
    }
    document.write("</table>");
}

function webtechconTabelle() {

    document.write('<table class="teilnehmertable" width="100%" border="1" cellpadding="5" cellspacing="0">');
    document.write(' <tr class="teilnehmertableheader"><th>Name</th><th>Vorname</th><th>Studiengang</th><th>eMail</th></tr>');

    for (i = 0; i < webtechJSON.webtech.length; i++) {
        document.write(' <tr><td>' + webtechJSON.webtech[i].name + '</td><td>' + webtechJSON.webtech[i].Vorname + '</td><td>' + '<span id="paddingLeft">' + webtechJSON.webtech[i].Studiengang + '</span>' + '</td><td>' + webtechJSON.webtech[i].eMail + '</td></tr>');
    }
    document.write("</table>");
}

function conhitTabelle() {

    document.write('<table class="teilnehmertable" width="100%" border="1" cellpadding="5" cellspacing="0">');
    document.write(' <tr class="teilnehmertableheader"><th>Name</th><th>Vorname</th><th>Studiengang</th><th>eMail</th></tr>');

    for (i = 0; i < conhitJSON.conhit.length; i++) {
        document.write(' <tr><td>' + conhitJSON.conhit[i].name + '</td><td>' + conhitJSON.conhit[i].Vorname + '</td><td>' + '<span id="paddingLeft">' + conhitJSON.conhit[i].Studiengang + '</span>' + '</td><td>' + conhitJSON.conhit[i].eMail + '</td></tr>');
    }
    document.write("</table>");
}
