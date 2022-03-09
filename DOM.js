const p = document.getElementById('paragrafo');

p.innerText = 'meu texto';

p.style.background = 'green';

const cores = [ 'orange',
                'red',
                'pink',
                'blue',
                'black',
                'brown',
                'yellow'
]


for (i = 0, c = 0 ; i < 1000; i++, c++){

    p.style.background = cores[c];
        
    console.log(p.style.background);    
    
    if(c >= 6) c = 0;
}

    
console.log(p);