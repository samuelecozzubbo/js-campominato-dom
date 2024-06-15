//seleziono il contenitore ed il bottone
const container = document.getElementById("grid");
const myBtn = document.querySelector("button");
let alreadyPlayed;
let points;
let gameOver;
let difficulty;
let nuovoboxSize;


// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
myBtn.addEventListener("click",generateGrid);
//creo l'array di numeri in ordine casuale


// Ogni cella ha un numero progressivo, da 1 a difficulty.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

/*************** 
    FUNZIONI
 *******************/ 

//Funzione Grid Generator
function generateGrid() {
    container.innerHTML = "";
    difficulty = parseInt(document.getElementById("difficulty").value);
    let bombNumbers = parseInt(difficulty / 10);
    console.log(bombNumbers);
    console.log(difficulty);
    gameOver = false;
    let alreadyPlayed = false;
    points = 0;
    gridNumbers = genSequenzaNumRandom(1,difficulty,bombNumbers);
    console.log(gridNumbers);
    if(alreadyPlayed === false){
        //aggiungo i blocchi per difficulty volte
    for(let i = 0; i < difficulty; i++) {
        //creo uno square
        const nuovobox = createElementWithClass("div", "square");
        //Generazione width celle in base alla difficoltà scelta
        if(difficulty === 49){
            nuovoboxSize = 100 / 7;
        }else if(difficulty === 81){
            nuovoboxSize = 100 / 9;
        }else {
            nuovoboxSize = 100 / 10;
        }
        nuovobox.style.width = `${nuovoboxSize}%`;
        
        //aggiungo il blocco al contenitore
        container.append(nuovobox);
        nuovobox.append(i + 1);
        }

    //Invoco funzione add class
    addClassWithLinstener("clicked");
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


//Funzione add class with linstener
function addClassWithLinstener(className) {
    //Richiamo i box
    const box = document.querySelectorAll(".square");
    for(let i = 0; i < difficulty; i++) {
    //Gestisco il click sul singolo elemento
    box[i].addEventListener("click",
        function(){
            if (gameOver){ // Se il gioco è finito, esci dalla funzione
                alert("Clicca play per fare una nuova partita");
                return;
            } 
            this.classList.add(className); 
            console.log("Hai cliccato il box", i + 1);
            //Aggiunta classe bomb or safe
            if(gridNumbers.includes(i + 1)){
                this.classList.add("bomb");
                alert("PARTITA TERMINATA HAI FATTO " + points + " PUNTI");
                gameOver = true;
            } else{
                this.classList.add("safe");
                points++;
                console.log("Hai fatto ",points,"punti");
            }
        }
    )
    }   
}



//funzione che genera un numero random 
    //Funzione
    function RandomNumberGenerator(min, max) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber; 
    }


//Funzione che genera un array di numeri in un range in ordine casuale

function genSequenzaNumRandom(min, max, numberToGen) {
    const arrToGen = [];

    //Fino a quando arrToGen.lenght = numero di elementi voluto

    
    while(arrToGen.length < numberToGen){
        //genero numero random nel range stabilito
        let newRandomNum = RandomNumberGenerator(min,max);

        //vedo se inserire o meno nell array(se non già compreso)
        if(!arrToGen.includes(newRandomNum)){ //se arrtogen non inlcude newrandom num
            arrToGen.push(newRandomNum);

        }
    }
    return arrToGen

}