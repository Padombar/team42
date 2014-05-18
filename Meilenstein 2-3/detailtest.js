         
function messeTabelle(){
    
    var messe = new Array();
        messe["CeBIT"] = "15 €";
        messe["ConhIT"] = "30 €";
        messe["WebTech Con"] = "300 €";
            
    for (var eigenschaft in messe) {
            document.write(
            "<tr><td>" + eigenschaft + "</td>" +
            "<td><code>" + messe[eigenschaft] + "</code></td></tr>"
            );
    }
}



function cebitTabelle(){   
    
    for (var e in cebit){
        if (cebit.hasOwnProperty(e)) {
            "<tr><td>" + print(e["name"]); + "</td>" +
            "<tr><td>" + print(e["Vorname"]); + "</td>"
        }
    }
}

	
	var cebit: [
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
	]	






