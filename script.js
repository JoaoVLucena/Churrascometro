// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let result = document.getElementById("result");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebida = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    result.innerHTML = `<p class="carne"><img src="Img/carne-icon.png" width="30px">${qdtTotalCarne / 1000} Kg de Carne</p>`
    result.innerHTML += `<p class="cerveja"><img src="Img/cerveja-icon.png" width="30px">${Math.ceil(qdtTotalCerveja / 355)} latas de Cerveja</p>`
    result.innerHTML += `<p class="refri"><img src="Img/refri-icon.png" width="30px">${Math.ceil(qdtTotalBebida / 2000)} Garrafas de Refrigerante</p>`

}

function carnePP(duracao){
    if(duracao >= 6){
      return 650;
  }
    else{
      return 400;
  }
}

function cervejaPP(duracao){
  if(duracao >= 6){
      return 2000;
  }
  else{
    return 1200;
  }
}

function bebidasPP(duracao){
  if(duracao >= 6){
      return 1500;
  }
  else{
    return 1000;
  }
}
