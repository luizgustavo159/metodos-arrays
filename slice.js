
function filtro80(dados){
    let inicioDados = Math.round(dados.length*0.1);
    let fimDados = Math.floor(dados.length*0.9);
    console.log(inicioDados, fimDados);
    console.log(dados.slice(inicioDados, fimDados));
}
const dados = [0,1,5,7,10,33,55,60,57,85,45,68,49,57,89,69,57,33,22,11,5,3,1,0,0];

filtro80(dados);