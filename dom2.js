const p = document.getElementById('paragrafo');
const titulo = document.querySelector('h1');


p.innerText = 'Meu texto!';

if(confirm('Quer entra com um valor?')){

    let valor = prompt('Entre com um número de 0 a 10');

    if( valor >= 0 && valor <= 10){

        p.innerText = '';

        for(i = 0 ; i < valor ; i++){
            
            p.innerText = p.innerText + "Luiz Bono\n";
        }

        titulo.style.background ='green';
    } else {

        p.innerText = 'Valor inválido';
        titulo.style.background = 'yellow';
    }

} else {
    p.innerText = 'Que pena que você não entrou com um valor :-(';
    titulo.style.background = 'red';

}