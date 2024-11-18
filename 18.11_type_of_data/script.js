let person = {
    'fistname' : 'Nicola',
    'age' : 41,
    'hardskills' : ['html', 'css' , 'javascript'],
    'hair' : false,
    'greet' : function(){
        return 'ciao a tutti';
    }
}

console.log(person.fistname);

function somma ( numero1, numero2){
    let resutl = numero1 + numero2;
    return resutl
}

console.log(somma(1, 200))
console.log(person.greet())


//manipolazione dom (document object model)

console.log(document);

//catturare elemento del dom
let h1 = document.querySelector("h1");

//cambiare stile css di un elemento html
//h1.style.color = 'red'

//aggiungere  o rimuovere una classe css
h1.classList.add('border')


//aggiungere contenuto html
h1.innerHTML = `Ciaoo`



//creazione di elemento html
//1 - catturare il contenitore
//2 - creare un nuvo elemento html
//3- riempire questo nuovo elemento
//4- dire a javascript dove inserirlo ( append )
let container = document.querySelector('#container');
let p = document.createElement('p');
p.innerHTML = 'lorem'
container.appendChild(p)
console.log(p)

//associare un evento ad un tasto
let btn = document.querySelector('#btn');

btn.addEventListener('click', ()=>{
    let red = Math.floor(Math.random() * (255 - 0)+ 0);
    let green = Math.floor(Math.random() * (255 - 0)+ 0);
    let blue = Math.floor(Math.random() * (255 - 0)+ 0);
    btn.style.color = `rgb ${red}, ${green}, ${blue}`;
})



