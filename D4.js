/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 1");
const area = function (l1, l2) {
  let risultato = l1 * l2;
  return risultato;
};
console.log(area(3, 2)); //6
console.log(area(5, 2)); //10

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 2");
const crazySum = function (n1, n2) {
  let risultato;
  if (n1 === n2) {
    risultato = (n1 + n2) * 3;
  } else {
    risultato = n1 + n2;
  }
  return risultato;
};
console.log(crazySum(1, 3)); //4
console.log(crazySum(2, 2)); //12

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 3");
const crazyDiff = function (n1) {
  let result;
  if (n1 > 19) {
    result = Math.abs(n1 - 19) * 3;
  } else {
    result = Math.abs(n1 - 19);
  }
  return result;
};
console.log(crazyDiff(23)); // 12
console.log(crazyDiff(17)); // 2

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 4");
const boundary = function (n) {
  let ris;
  if (Number.isInteger(n) === true) {
    if ((n >= 20 && n <= 100) || n === 400) {
      ris = true;
    } else {
      ris = false;
    }
  } else {
    ris = "hai inserito un numero non intero";
  }
  return ris;
};

console.log(boundary(20)); //true
console.log(boundary(100)); //true
console.log(boundary(50)); //true
console.log(boundary(400)); //true
console.log(boundary(250)); //false
console.log(boundary(2)); //false
console.log(boundary(5.5)); //errore

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 5");
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 6");

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 7");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 8");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 9");
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 10");
