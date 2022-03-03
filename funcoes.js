/*

function olaMundoLog(nome) {
    console.log(`Olá ${nome}`);
}

const SOMA = function(a, b){
    
    return a + b;
};

(function (a, b){
    console.log(a + b);
})(2, 5);

olaMundoLog('Gui');

let resultado = SOMA(2,2);

console.log (resultado);


let frutas = ['maça', 'banana', 'uva']
 
    console.log(frutas.length)

function ultimoElemento() {
    let ultimo = frutas[frutas.];
}

ultimoElemento();   */


/*
vetor = ['Guilherme', 'Lima', '99', 'Limão']; //eu defino o vetor

function pegaUltima(vet){ //defino a função
    
    let ult = vet.length - 1; //tiro -1 para contagem correta, pois o index começa no 0
    console.log('tamanho = ' + vet.length); //faço um log para descobrir o tamanho com a subtração

    return vet[ult] //retorno o ultimo
}
 
let novoVetor  = pegaUltima(vetor); //defino qual o ultimo valor

console.log('Ultimo ' + novoVetor); //jogo o ultimo valor na tela

let aluno = {   nome: "Guilherme",
                matricula: 7878,
                setNome: function (n){
                    console.log('Muda para ' + n)
                }};
aluno.setNome('Brasil');

*/

mes = [ "janeiro",
        "fevereiro",
        "fevereiro",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro" ]


function mesAtual() {

    const mes = [ "janeiro",
        "fevereiro",
        "março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro" ]
    
    let hoje = new Date;

    return mes[hoje.getMonth()]
}

console.log(mesAtual());