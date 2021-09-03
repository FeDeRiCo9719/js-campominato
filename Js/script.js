/* 
- (bombe) Il computer deve generare 16 numeri casuali tra 1 e NumCelle. => numero.random => array di numeri * 16 volte => ciclo definito
- I numeri non possono essere duplicati. => ciclo.condizione
- In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
- La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
- Al termine della partita il software deve comunicare il punteggio.

// BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

// ho una lista di numeri esplosivi (bombe) 
// SE  event.target (numero cliccato dall'utente) corrispode a uno dei numeri esplosivi (bombe)
// il gioco termina




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
var difficoltà = prompt("Inserisci la difficoltà: facile, normale o difficile");

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


// 2. Generare le bombe di prova
var bombe = [4, 7, 20];
var Bombe = [];

// while ( Bombe.length < 16 ) {
//     // 1.generare un numero random salvandolo in una variabile
//     // 2.Se il numero è già presente all'interno dell'array Bombe genero un numero diverso (inArray)
//     // 3.pushare la variabile all'interno dell'array
// }
console.log (bombe);


// 3. Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga
CreateCell(NumCelle);


// 4. Al click su una cella, il colore cambia, si deve verificare se il numero della cella corrisponde ad un numero bomba

var numeriCliccati = [];
var punteggio = numeriCliccati;

document.getElementById("Campo").addEventListener ("click",
    function (event) {
        // event.target.classList.toggle("changeColor"); // toggle => aggiunge e toglie la classe "changeColor" ad ogni click
        event.target.classList.add("changeColor");

        // salvo il numero casella in una variabile
        var Num = (event.target.innerHTML);

        // Se clicchi su una bomba
        if ( inArray( bombe, Num ) == true ) {
            event.target.classList.add("redColor");
            alert(`OPS.. LA CASELLA NUMERO ${Num} É UNA BOMBA! HAI CLICCATO IN TOTALE ${punteggio.length} CASELLE SU ${NumCelle}`);
            location.reload();

        // se invece hai cliccato già su un numero
        } else if ( inArray( numeriCliccati, Num ) == true ) {
            alert(`HAI GIÀ CLICCATO SU QUESTO NUMERO..`);
        
        // altrimenti pusha il numero nell'array "numeriCliccati"    
        } else {
            numeriCliccati.push(Num);
        }

        // Se l'utente riesce a cliccare su tutte le caselle evitando le bombe vince
        if ( numeriCliccati.length == (NumCelle - 16) ) {
            alert(`HAI VINTO! SEI RIUSCITO A CLICCARE SU TUTTE LE CASELLE EVITANDO LE BOMBE!`);
            location.reload();
        }

    }
);
