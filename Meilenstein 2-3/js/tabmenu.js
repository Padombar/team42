
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
