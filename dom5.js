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
