function mudaPoema(poema) {
    document.getElementById("icone").src = poema;
}

function calc_total() {
    var qtd = parseInt(document.getElementById('cQtd').value);
    tot = qtd * 1500;
    document.getElementById('cTot').value = tot;
  }
