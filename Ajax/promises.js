
/*
//exemplo com callback 
const POSTS = [
    {titulo: 'Post um', cont: 'Conteudo post um'},
    {titulo: 'Post dois', cont: 'Conteudo post dois'}];

function criaPost(post, callback){
        POSTS.push(post);
        callback();
    }
function getPosts(){
    let saida = '';
    POSTS.forEach(function(post){
        saida += `<li>${post.titulo}</li>`;
    })  ;
    document.body.innerHTML = saida;
}
criaPost ({titulo: 'Post três', cont: 'Conteudo post três'}, getPosts);
*/
// erro

function criaPost(post){
    return new promise(function(resolve, rejeita){
        
        const ERR = false;

        if(!ERR){
            POSTS.push(post);
            resolve();
        }else {
            rejeita('Erro, não foi possivel executar');
        }
        
        
    });
}

function getPosts(){
    let saida = '';
    POSTS.forEach(function(post){
        saida += `<li>${post.titulo}</li>`;
    });
    document.body.innerHTML = saida;
}

criaPost({titulo: 'post três', cont: 'Conteudo post tres'}).tgeb(getPosts).catch(function(erro){
    console.log(erro)
});


/*
//promise

function criaPost(post){
    return new promise(function(resolve, rejeita){
        POSTS.push(post);
        resolve();
    });
}

function getPosts() {
    let saida = '';
    POSTS.forEach(function(post){
        saida += `<li>${post.titulo}</li>`
    })
}
*/

