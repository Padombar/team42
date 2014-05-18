         
function messeTabelle(){
    
    var messe = new Array();
        messe["CeBIT"] = "15 €";
        messe["ConhIT"] = "30 €";
        messe["WebTech Con"] = "300 €";
            
    for (var e in messe) {
            document.write(
            "<tr><td>" + e + "</td>" +
            "<td><code>" + messe[e] + "</code></td></tr>"
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



function conhitTabelle(){
        for (var e in conhit){
            document.write(
            "<tr><td>" + e + "</td>" +
            "<td><code>" + conhit[e] + "</code></td></tr>"
            );
        }
}


function webtechconTabelle(){
        for (var e in webtechcon){
            document.write(
            "<tr><td>" + e + "</td>" +
            "<td><code>" + webtechcon[e] + "</code></td></tr>"
            );
        }
}



