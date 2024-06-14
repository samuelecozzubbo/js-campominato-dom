//seleziono il contenitore ed il bottone
const container = document.getElementById("grid");
const myBtn = document.querySelector("button");
let alreadyPlayed = false;

// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
myBtn.addEventListener("click",generateGrid);
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

/*************** 
    FUNZIONI
 *******************/ 

//Funzione Grid Generator
function generateGrid() {
    if(alreadyPlayed === false){
        //aggiungo i blocchi per 100 volte
    for(let i = 0; i < 100; i++) {
        //creo uno square
        const nuovobox = createElementWithClass("div", "square");
        //aggiungo il blocco al contenitore
        container.append(nuovobox);
        nuovobox.append(i + 1);
        }   
        //Invoco funzione add class
        addClass();
        //cambio stato variabile
        alreadyPlayed = true;
    }     
}


//Funzione che crea un elemento html
function createElementWithClass(tag, classToAdd) {
    //creo l'elemento 
    const element = document.createElement(tag);
    //aggiungo la classe principale
    element.classList.add(classToAdd);
    return element;
}


//Funzione add class 
function addClass() {
    //Richiamo i box
    const box = document.querySelectorAll(".square");
    for(let i = 0; i < 100; i++) {
    //Gestisco il click sul singolo elemento
    box[i].addEventListener("click",
        function(){
            this.classList.toggle("clicked");
            console.log("Hai cliccato il box",i + 1);
        }
    );
    }   
}