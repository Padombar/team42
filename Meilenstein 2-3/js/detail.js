/* Tab Menuebereich */
function teilnehmerContent(){
    document.getElementById("teilnehmer").style.color ="#F9F9F9";
    document.getElementById("messe").style.color ="#000000";
    document.getElementById("teilnehmer").style.backgroundColor ="#3f47cc";
    document.getElementById("messe").style.backgroundColor = "transparent";
    document.getElementById("kostenTabelle").style.visibility = 'hidden';
    document.getElementById("teilnehmerTabBox").style.visibility = 'visible';
    document.getElementById("teilnehmerTabCebit").style.backgroundColor = "#00a4eb";
    document.getElementById("teilnehmerTabConhit").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabWebConTech").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabellen").style.visibility ='visible';
    document.getElementById("cebitTabelle").style.visibility ='visible';
    document.getElementById("conhitTabelle").style.visibility ='hidden';
    document.getElementById("webtechconTabelle").style.visibility ='hidden';
}

function kostenContent(){
    document.getElementById("teilnehmer").style.color ="#000000";
    document.getElementById("messe").style.color ="#F9F9F9";
    document.getElementById("teilnehmer").style.backgroundColor ="transparent";
    document.getElementById("messe").style.backgroundColor = "#3f47cc";
    document.getElementById("kostenTabelle").style.visibility ='visible';
    document.getElementById("teilnehmerTabBox").style.visibility = 'hidden';
    document.getElementById("teilnehmerTabellen").style.visibility ='hidden';
    document.getElementById("cebitTabelle").style.visibility ='hidden';
    document.getElementById("conhitTabelle").style.visibility ='hidden';
    document.getElementById("webtechconTabelle").style.visibility ='hidden';
}

function cebitContent(){
    document.getElementById("teilnehmerTabCebit").style.backgroundColor = "#00a4eb";
    document.getElementById("teilnehmerTabConhit").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabWebConTech").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabellen").style.visibility ='visible';
    document.getElementById("cebitTabelle").style.visibility ='visible';
    document.getElementById("conhitTabelle").style.visibility ='hidden';
    document.getElementById("webtechconTabelle").style.visibility ='hidden';
}

function conhitContent(){
    document.getElementById("teilnehmerTabCebit").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabConhit").style.backgroundColor = "#00a4eb";
    document.getElementById("teilnehmerTabWebConTech").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabellen").style.visibility ='visible';
    document.getElementById("cebitTabelle").style.visibility ='hidden';
    document.getElementById("conhitTabelle").style.visibility ='visible';
    document.getElementById("webtechconTabelle").style.visibility ='hidden';
}

function webtechconContent(){
    document.getElementById("teilnehmerTabCebit").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabConhit").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabWebConTech").style.backgroundColor = "#00a4eb";
    document.getElementById("teilnehmerTabellen").style.visibility ='visible';
    document.getElementById("cebitTabelle").style.visibility ='hidden';
    document.getElementById("conhitTabelle").style.visibility ='hidden';
    document.getElementById("webtechconTabelle").style.visibility ='visible';
}

/* JSON-Objekte */
var webtechJSON = {"webtech":[
    {
        "name": "Spies",
        "Vorname": "Marcell",
        "Studiengang": "IB",
        "eMail": "m.spies@gmail.com"
    },
    {
        "name": "Hoppe",
        "Vorname": "Johannes",
        "Studiengang": "UIB",
        "eMail": "j.hoppe@gmx.de"
    },
    {
        "name": "Hofmeister",
        "Vorname": "Johannes",
        "Studiengang": "UIB",
        "eMail": "cessor@gmail.de"
    }
]};

  var conhitJSON ={"conhit": [
    {
        "name": "Schmuecker",
        "Vorname": "Paul",
        "Studiengang": "IMB",
        "eMail": "p.schmuecker@hs-mannheim.de"
    },
    {
        "name": "Felsenheimer",
        "Vorname": "Jan",
        "Studiengang": "IB",
        "eMail": "j.felsenheimer@hs-mannheim.de"
    }
]};

     var cebitJSON ={"cebit":[
      {
          "name": "Ent",
          "Vorname": "Thilo",
          "Studiengang": "IB",
          "eMail": "t.ent@gmail.de"
      },
      {
          "name": "Kraus",
          "Vorname": "Martina",
          "Studiengang": "IB",
          "eMail": "m.kraus@hs-mannheim.de"
      },
      {
          "name": "Smits",
          "Vorname": "Thomas",
          "Studiengang": "UIB",
          "eMail": "t.smits@hs-mannheim.de"
      },
      {
          "name": "Groeschel",
          "Vorname": "Michael",
          "Studiengang": "UIB",
          "eMail": "m.groeschel@hs-mannheim.de"
      },
      {
          "name": "Ent",
          "Vorname": "Thilo",
          "Studiengang": "IB",
          "eMail": "t.ent@gmail.de"
      }
  ]};

      var kostenJSON = {"kosten":[
      {
          "Messe": "Cebit",
          "Selbstkostenanteil": "15"
      },

      {
          "Messe": "Conhit",
          "Selbstkostenanteil": "50"
      },

      {
          "Messe": "WebTechCon",
          "Selbstkostenanteil": "300"
      }
  ]};

/* Tabellen erstellen und mit JSON-Objekten beschreiben */
function kostenTabelle() {

    document.write('<table class ="kostentable" width="100%" border="1" cellpadding="5" cellspacing="0">');
    document.write(' <tr id ="kostentableheader"><th>Messe</th><th>Selbstkosten</th></tr>');

    for(i=0; i<kostenJSON.kosten.length;i++){
        document.write(' <tr><td>'+kostenJSON.kosten[i].Messe+'</td><td>'+kostenJSON.kosten[i].Selbstkostenanteil+' €'+'</td></tr>');
    }
    document.write("</table>");
}

function cebitTabelle() {

    document.write('<table class="teilnehmertable" width="100%" border="1" cellpadding="5" cellspacing="0">');
    document.write(' <tr class="teilnehmertableheader"><th>Name</th><th>Vorname</th><th>Studiengang</th><th>eMail</th></tr>');

    for(i=0; i<cebitJSON.cebit.length;i++){
        document.write(' <tr><td>'+cebitJSON.cebit[i].name+'</td><td>'+cebitJSON.cebit[i].Vorname+'</td><td >'+'<span id="paddingLeft">'+cebitJSON.cebit[i].Studiengang+'</span>'+'</td><td>'+cebitJSON.cebit[i].eMail+'</td></tr>');
    }
    document.write("</table>");
}

function webtechconTabelle() {

    document.write('<table class="teilnehmertable" width="100%" border="1" cellpadding="5" cellspacing="0">');
    document.write(' <tr class="teilnehmertableheader"><th>Name</th><th>Vorname</th><th>Studiengang</th><th>eMail</th></tr>');

    for(i=0; i<webtechJSON.webtech.length;i++){
        document.write(' <tr><td>'+webtechJSON.webtech[i].name+'</td><td>'+webtechJSON.webtech[i].Vorname+'</td><td>'+'<span id="paddingLeft">'+webtechJSON.webtech[i].Studiengang+'</span>'+'</td><td>'+webtechJSON.webtech[i].eMail+'</td></tr>');
    }
    document.write("</table>");
}

function conhitTabelle() {

    document.write('<table class="teilnehmertable" width="100%" border="1" cellpadding="5" cellspacing="0">');
    document.write(' <tr class="teilnehmertableheader"><th>Name</th><th>Vorname</th><th>Studiengang</th><th>eMail</th></tr>');

    for(i=0; i<conhitJSON.conhit.length;i++){
        document.write(' <tr><td>'+conhitJSON.conhit[i].name+'</td><td>'+conhitJSON.conhit[i].Vorname+'</td><td>'+'<span id="paddingLeft">'+conhitJSON.conhit[i].Studiengang+'</span>'+'</td><td>'+conhitJSON.conhit[i].eMail+'</td></tr>');
    }
    document.write("</table>");
}
