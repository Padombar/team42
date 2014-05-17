
function teilnehmerContent(){
    document.getElementById("teilnehmer").style.backgroundColor ="#3f47cc";
    document.getElementById("messe").style.backgroundColor = "transparent";
    document.getElementById("kostenTabelle").style.visibility = 'hidden';
    document.getElementById("teilnehmerTabBox").style.visibility = 'visible';
}

function kostenContent(){
    document.getElementById("teilnehmer").style.backgroundColor ="transparent";
    document.getElementById("messe").style.backgroundColor = "#3f47cc";
    document.getElementById("teilnehmerTabBox").style.visibility = 'hidden';
    document.getElementById("kostenTabelle").style.visibility ='visible';
}

function cebitContent(){
    document.getElementById("teilnehmerTabCebit").style.backgroundColor = "#00a4eb";
    document.getElementById("teilnehmerTabConhit").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabWebConTech").style.backgroundColor = "transparent";
}

function conitContent(){
    document.getElementById("teilnehmerTabCebit").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabConhit").style.backgroundColor = "#00a4eb";
    document.getElementById("teilnehmerTabWebConTech").style.backgroundColor = "transparent";
}

function webtechconContent(){
    document.getElementById("teilnehmerTabCebit").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabConhit").style.backgroundColor = "transparent";
    document.getElementById("teilnehmerTabWebConTech").style.backgroundColor = "#00a4eb";
}
