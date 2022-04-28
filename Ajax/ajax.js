//exemplo com XML HTTP Request

document.getElementById('xhr').addEventListener('click', carregaConteudo);

function carregaConteudo() {
    console.log('clickou')
    const XHR = new XMLHttpRequest();

    XHR.open('GET', 'http://10.135.236.39:5500/AJAX/conteudo.txt', true);

    XHR.onload = function() {
        if (this.status === 200){
            document.getElementById('exibe-conteudo-recuperado').innerText = this.responseText;
        }
    }

    XHR.send();

}

//exemplo com Fetch

document.getElementById('fetch').addEventListener('click', carregaConteudo);

function carregaConteudo(){
    fetch('conteudo.txt').then(function(resultado){
        return resultado.text();
    }).then(function(conteudo){
        document.getElementById('exibe-conteudo-recuperado').innerText = conteudo;
    });
}