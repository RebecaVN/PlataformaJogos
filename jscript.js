var casas = [9, 9, 9, 9, 9, 9, 9, 9, 9];

var vez = 1;

var contaClique = 0;

var iPontosRaiden= 0;
var iPontosSub= 0;
var iPontosV = 0;
var sResposta = "";

function verifica(casa) {
  if (casas[casa] == 9) {
    casas[casa] = vez;

    if (vez == 1) {
      document.getElementById("img" + casa).src = "img/subzero.png";
    } else {
      document.getElementById("img" + casa).src = "img/raiden.png";
    }

    vez *= -1;
    contaClique++;

    confere();
  }
}

function confere() {
  var i;

  var ganhou = false;
  var acabou = true;

  for (i = 0; i < casas.length; i++) {
    if (casas[i] == 9) {
      acabou = false;
    }
  }

  if (contaClique == 9) {
    acabou = true;
  }

  var Soma = [];
  Soma[0] = casas[0] + casas[1] + casas[2];
  Soma[1] = casas[3] + casas[4] + casas[5]; 
  Soma[2] = casas[6] + casas[7] + casas[8]; 
  Soma[3] = casas[0] + casas[3] + casas[6]; 
  Soma[4] = casas[1] + casas[4] + casas[7]; 
  Soma[5] = casas[2] + casas[5] + casas[8]; 
  Soma[6] = casas[0] + casas[4] + casas[8]; 
  Soma[7] = casas[2] + casas[4] + casas[6]; 

  for (i = 0; i < Soma.length; i++) {
    if (Soma[i] == -3) {
      ganhou = true;
      sResposta = "Raiden ganhou!!";
      iPontosRaiden++;
      document.getElementById("raiden").innerHTML = "Pontos Raiden: " + iPontosRaiden;
      break;
    } else if (Soma[i] == 3) {
      ganhou = true;
      sResposta = "Subzero ganhou!!";
      iPontosSub++;
      document.getElementById("subzero").innerHTML = "Pontos Subzero: " + iPontosSub;
      break;
    }
  }

  if (ganhou == false && acabou == true) {
    sResposta = "Deu velha!!";
    iPontosV++;
    document.getElementById("velha").innerHTML = "Velha: " + iPontosV;
  }

  if (ganhou || acabou) {
    for (i = 0; i < casas.length; i++) {
      document.getElementById("casa" + i).disable = true;
      casas[i] = 0;
    }
    document.getElementById("resposta").innerHTML = sResposta;

    document.getElementById("resposta").style.color = "black";

    document.getElementById("resposta").style.fontSize = "25px";
  }
}

function recomeca(){
    for(i=0;i<casas.length;i++){
        document.getElementById("img"+i).ondragstart = function(){return false; };

        document.getElementById("casa"+i).disable=false;

        document.getElementById("img" + i).src="img/teste.jpg";

        document.getElementById("resposta").innerHTML = "Resultado:";
        document.getElementById("resposta").style.color = "black";
        document.getElementById("resposta").style.fontSize = "25px";

        casas[i]=9;
        ganhou=false;
        acabou= true;
        contaClique=0;
        vez =1;
    }
}