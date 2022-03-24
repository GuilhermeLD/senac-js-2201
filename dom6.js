//criando LI

const LI = document.createElement('li'); //cria um elemento

LI.className = 'collection-item'; //define a classe css

LI.id = 'nova-tarefa-qualquer'; // define o ID

LI.setAttribute('title', 'Pare o mouse para ver'); //adiciona um atributo


//criando o texto do LI
const TEXTO = document.createTextNode('Tarefa inserida dinamicamente');


//Criando o xiszinho
const DELETE = document.createElement('a');


DELETE.setAttribute('href', '#') //primeira aspas atributo. o seguro é o valor

DELETE.className = 'delete-item secondary-content';

DELETE.innerHTML = '<i class="fa fa-remove"></i>';

//setando esse elesmentos
LI.appendChild(TEXTO);
LI.appendChild(DELETE);

console.log(DELETE)



const UL = document.querySelector('ul.collection');




UL.appendChild(LI);



const novoTitulo = document.createElement('h5')

novoTitulo.id = 'task-title';

novoTitulo.appendChild(document.createTextNode('Listinha'));

const tituloAntigo = document.getElementById('task-title');

const acaoNoCard = document.getElementsByClassName('card-action');


console.log(acaoNoCard[0]);

acaoNoCard[0].replaceChild(novoTitulo, tituloAntigo);