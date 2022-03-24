/*

//primeiro da lista 
console.log(document.querySelector('li:first-child').innerText);

//ultimo da lista
console.log(document.querySelector('li:last-child').innerText);

//pegar por ordem. o nth vem do ingles de numero ordenado
console.log(document.querySelector('li:nth-child(2)').innerText);


//Elementos mutiplos 


console.log(document.getElementsByClassName('collection-item'));

const itens = document.getElementsByClassName('collection-item');

itens[1].style.color = 'blue';


const itens = document.getElementsByTagName('li');
itens[3].style.color = 'green';
itens[0].style.color = 'green';
itens[1].style.color = itens[2].style.color = 'yellow'; 
*/

/*
const itens = document.getElementsByTagName('li');

let itensArray = Array.from(itens);

itensArray.forEach(function(li, indice){
        console.log(indice + ': ' + li.innerText    );
});
*/
/*
let itensImpares = document.querySelectorAll('li:nth-child(odd)');
let itensPares = document.querySelectorAll('li:nth-child(even)');


//odd para imár
//even para par

console.log(itensImpares);

itensImpares.forEach(function(li, indice){
    li.style.background = '#FFFBE6';
})

itensPares.forEach(function(li, indice){
    li.style.background = '#E6F2FF';
})
*/

/*
const ITENS = document.querySelector('ul.collection');

console.log(ITENS.children[2]);


ITENS.children[2].firstChild.textContent = 'Opa mundão';
ITENS.children[3].firstChild. data = 'Opa salve querida';
ITENS.children[4].firstChild. nodeValue = 'Queridao vc ein';

*/


/*
//alerando algum elementos filho através do query selector
const LABEL = document.querySelector('.card-action')

console.log(LABEL.children[3]);

LABEL.children[3].textContent = 'to com fomeeee'
*/

const LI = document.createElement('li'); //cria um elemento

LI.className = 'collection-item'; //define a classe css

LI.id = 'novo-item'; // define o ID

LI.setAttribute
