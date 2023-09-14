var filmes = [
    "Planeta dos Macacos",
    "O Senhor dos Aneis",
    "Harry Potter",
    "Pulp Fiction",
    "Cidade de Deus",
    "Matrix",
    "Interestelar",
    "De Volta para o Futuro",
    "Crepúsculo",
    "O Poderoso Chefao"
  ];
  
  var currentFilmeIndex = 0;
  
  function getRandomFilme() {
    var randomIndex = Math.floor(Math.random() * filmes.length);
    return filmes[randomIndex];
  }
  
  function trocarPalavra() {
    var sentence = document.getElementById("sentence").innerHTML;
    var newWord = document.getElementById("wordInput").value;
    var currentFilme = filmes[currentFilmeIndex];
  
    var replacedSentence = sentence.replace(currentFilme, newWord);
    document.getElementById("result").innerHTML = replacedSentence;
  
    currentFilmeIndex = (currentFilmeIndex + 1) % filmes.length;
    document.getElementById("sentence").innerHTML = "Filme: '" + filmes[currentFilmeIndex] + "'";
    document.getElementById("wordInput").value = "";
  }
  