const FORMULARIO  = document.querySelector('#form-tarefa');
const LISTA = document.querySelector ('.collection');
const BTN_LIMPAR = document.querySelector ('.limpar-tarefas');
const FILTRO = document.querySelector('#filtro');
const CAMPO_TAREFA = document.querySelector('#tarefa');

function carregaMonitorDeEventos(){

    //eventos
    FORMULARIO.addEventListener('submit', adicionaTarefa);
    LISTA.addEventListener('click', apagaTarefa);
    BTN_LIMPAR.addEventListener('click', apagarTodasTarefas);
    FILTRO.addEventListener('keyup', filtraTarefa);

}

function pegaTarfa() {
    let tarefas;

    if(localStorage.getItem('tarefas') === null){
        tarefas = [];
    }else{
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }

    tarefas.forEach(function(tarefa){

              //colocando os elementos
              const LI = document.createElement('li');
              LI.className = 'collection-item'
              LI.appendChild(document.createTextNode(tarefa));
              const A = document.createElement('a');
              A.className = 'apaga-tarefas secondary-content';
              const I = document.createElement('i');
              I.className = 'fa fa-remove';
              A.appendChild(I);
              LI.appendChild(A);
              LISTA.appendChild(LI);
              //fim da inserção dos elementos

              
    })
}

function filtraTarefa(evento){

    const texto = evento.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(tarefa){
        
        const item = tarefa.firstChild.textContent;

        if(item.toLowerCase().indexOf(texto) != -1){
            tarefa.style.display= 'block';
        }
        else {
            tarefa.style.display= 'none';
        }
    })
}

function apagaTarefa(evento){

    if(evento.target.parentElement.classList.contains('apaga-tarefas')){
        evento.target.parentElement.parentElement.remove();
    }
}

function apagarTodasTarefas(evento){

    evento.preventDefault();

    LISTA.innerHTML = '';
}

function adicionaTarefa(evento){
    
    evento.preventDefault();

        if(CAMPO_TAREFA.value === ''){
            alert ('insira uma tarefa');    
        }
        else {
            //colocando os elementos
            const LI = document.createElement('li');
            LI.className = 'collection-item'
            LI.appendChild(document.createTextNode(CAMPO_TAREFA.value));
            const A = document.createElement('a');
            A.className = 'apaga-tarefas secondary-content';
            const I = document.createElement('i');
            I.className = 'fa fa-remove';
            A.appendChild(I);
            LI.appendChild(A);
            //fim da inserção dos elementos

            LISTA.appendChild(LI);  
            CAMPO_TAREFA.valeu = '';
        }

        gravarTarefanoLocalStorage(CAMPO_TAREFA, value);

    }

    function gravarTarefanoLocalStorage(){

        console.log(tarefa);

        let tarefas;

        if(localStorage.getItem('tarefas') === null);

    }else {
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }

    tarefas.push(tarefa.value);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    carregaMonitorDeEventos();