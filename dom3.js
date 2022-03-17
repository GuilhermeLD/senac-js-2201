/*tamanho da tela
const tamanho = window.innerHeight + 'x' + window.innerWidth;

*/

const navegador = window.navigator;

console.log(navegador);

const paragrafo = document.querySelector('p');

paragrafo.innerText = navegador;
