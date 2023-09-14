var sPerguntas=[["CARAMBOLA" ,  "FRUTA"],["JABOTICABA","FRUTA"],["JAMBO","FRUTA"],["CUPUAÇU","FRUTA"],["PITOMBA","FRUTA"],["FORTALEZA", "CIDADE"],["HOLAMBRA","CIDADE"],["TERESÓPOLIS","CIDADE"],["HORTOLÂNDIA","CIDADE"],["CARAPICUIBA","CIDADE"],["ALICATE", "FERRAMENTA"],["MARTELO","FERRAMENTA"],["SERRA TICO-TICO","FERRAMENTA"]["FORMÃO", "FERRAMENTA"]]

var iSorteados = [];
var iJogada = 0;
var sPalavraSorteada;
var iAcertos=0;
var iErro=0;
var cLetraClicada="";
var sLetras=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','-'];
var iCertas=0, iErradas=0;

function criaLetras(sPalavra){
    var formula = document.getElementById("tenta");
    var j =0;
    console.log("PALAVRA: "+sPalavra);
    for(var i=0; i<sPalavra.length;i++);
    if(sPalavra[i].charCodeAt(0)!=32){
        var letra = document.createElement("input");
        
        letra.setAttribute("type","text");
        letra.setAttribute("name","tenta"+j);
        letra.setAttribute("id","tenta"+j);
        letra.setAttribute("maxlength", 1);
        letra.setAttribute("size", 1);
        letra.setAttribute("disabled", true);
        formula.appendChild(letra);
        j++;    


    }
}
