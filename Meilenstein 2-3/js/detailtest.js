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


function kostenTabelle(){

    document.write('<table border="1" cellpadding="5" cellspacing="0">');
    document.write(' <tr><th>Messe</th><th>Selbstkostenanteil</th></tr>');

    for(i=0; i<kostenJSON.kosten.length;i++){
        document.write(' <tr><td>'+kostenJSON.kosten[i].Messe+'</td><td>'+kostenJSON.kosten[i].Selbstkostenanteil+' €'+'</td></tr>');
    }
    document.write("</table>");
}

function cebitTabelle(){

    document.write('<table border="1" cellpadding="5" cellspacing="0">');
    document.write(' <tr><th>Name</th><th>Vorname</th><th>Studiengang</th><th>eMail</th></tr>');

    for(i=0; i<cebitJSON.cebit.length;i++){
    document.write(' <tr><td>'+cebitJSON.cebit[i].name+'</td><td>'+cebitJSON.cebit[i].Vorname+'</td><td>'+cebitJSON.cebit[i].studiengang+'</td><td>'+cebitJSON.cebit[i].eMail+'</td></tr>');
    }
    document.write("</table>");
}

function webtechconTabelle(){

    document.write('<table border="1" cellpadding="5" cellspacing="0">');
    document.write(' <tr><th>Name</th><th>Vorname</th><th>Studiengang</th><th>eMail</th></tr>');

    for(i=0; i<webtechJSON.webtech.length;i++){
        document.write(' <tr><td>'+webtechJSON.webtech[i].name+'</td><td>'+webtechJSON.webtech[i].Vorname+'</td><td>'+webtechJSON.webtech[i].studiengang+'</td><td>'+webtechJSON.webtech[i].eMail+'</td></tr>');
    }
    document.write("</table>");
}

function conhitTabelle(){

    document.write('<table border="1" cellpadding="5" cellspacing="0">');
    document.write(' <tr><th>Name</th><th>Vorname</th><th>Studiengang</th><th>eMail</th></tr>');

    for(i=0; i<conhitJSON.conhit.length;i++){
        document.write(' <tr><td>'+conhitJSON.conhit[i].name+'</td><td>'+conhitJSON.conhit[i].Vorname+'</td><td>'+conhitJSON.conhit[i].studiengang+'</td><td>'+conhitJSON.conhit[i].eMail+'</td></tr>');
    }
    document.write("</table>");
}







