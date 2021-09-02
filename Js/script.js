/* Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso. */

// 1. Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco
// 2. Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga
// 3. Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso

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

// 1. Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco
var NumCelle = parseInt(prompt("Inserisci un numero da 1 a 100"));
// verifica numero
while ( NumCelle<1 || NumCelle>100 || isNaN(NumCelle) ) {
    alert("Ops.. Riprova");
    NumCelle = parseInt(prompt("Inserisci un numero da 1 a 100"));
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

