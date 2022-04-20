/*
//De objeto JSON para string
const OBJ = {nome: "Bono", idade: 37};

console.log( JSON.stringify(OBJ) );

//De string para objeto JSON
const STR = '{"nome": "Bono", "idade": 37}';

console.log( JSON.parse(STR) );

localStorage.setItem('nome', 'Bono');

const NOME = localStorage.getItem('nome');

console.log(NOME);

sessionStorage.setItem('idade', '37');

const IDADE = sessionStorage.getItem('idade');

console.log(IDADE);

document.querySelector('input.btn').addEventListener('click', function(e){

    e.preventDefault();

    const TAREFA = document.querySelector('#task').value;

    document.querySelector('#task').value = '';

    localStorage.setItem('tarefa', TAREFA);
});

const TRF = localStorage.getItem('tarefa');

if(TRF){
    document.querySelector('#exibe').innerText = TRF;
}


AULA ANTERIOR
*/

//aula 20/04

document.querySelector('input.btn').addEventListener('click', function(e){

    e.preventDefault();

    const TAREFA = document.querySelector('#task').value;

    let tarefas;

    if( localStorage.getItem('tarefas') === null){

        tarefas = [];

    }
    else {
        tarefas = JSON.parse(localStorage.getItem('tarefas'));

    }

    tarefas.push(TAREFA);

    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    console.log(tarefas);

});