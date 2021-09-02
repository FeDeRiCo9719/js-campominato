/* 
- Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
- I numeri non possono essere duplicati.
- In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
- La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
- Al termine della partita il software deve comunicare il punteggio.
// BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

/*
DICHIARARE LE FUNZIONI
*/

// A. creazione programma disegno celle => numero celle = numero dato dall'utente => ciclo definito
function CreateCell(num) {
    
    for ( var i = 1; i <= num; i++  ) {
        // selezionare l'elemento tramite id e inserire al suo interno del codice html
        var cell = document.getElementById("Campo").innerHTML += `<div class="cella">${i}</div>`
    }

    return cell
}

// B. cercare se un elemento è presente all'interno di un array
function inArray( array, element ) {

    var count = 0;
    
    //il cilo gira finchè count rimane minore rispetto alla lunghezza dell'array
    while ( count<array.length ) { 
        if ( array[count] == element ) {
            return true; // se viene trovato l'elemento la funzione termina qui
        }
        count++;
    }
    
    return false; // se NON viene trovato l'elemento la funzione termina qui

}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
PROGRAMMA
*/

// 1. Chiedere all'utente di inserire la difficoltà (numero di celle di cui sarà composto il campo da gioco)
var difficoltà = prompt("Inserisci la difficoltà: facile, normale, difficile");

// a. verifica dato inserito dall'utente
while ( difficoltà != "facile" && difficoltà != "normale" && difficoltà != "difficile" ) {
    alert("Ops.. Riprova");
    difficoltà = prompt("Inserisci la difficoltà: facile, normale, difficile");
}

// b. Convertire la difficoltà nel numero di celle da cui è composto il campo
if ( difficoltà == "facile" ) {
    var NumCelle = 100; 
} else if (difficoltà == "normale") {
    var NumCelle = 80;
} else if ( difficoltà == "difficile" ) {
    var NumCelle = 50;
}

// 2. Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga

// a. Richiamo funzione
var Cells = CreateCell(NumCelle);


// 3. Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso
var CELL = document.getElementById("Campo");
CELL.addEventListener ("click",
    function(event) {
        // console.log(event);
        // event.target.classList.toggle("changeColor"); // toggle => aggiunge e toglie la classe "changeColor"
        event.target.classList.add("changeColor");
        // alert(event.target.innerHTML);
    }
);

