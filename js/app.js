//Creare un alert dove ci sono scritti 5 numeri random
//1. Creare 5 numeri random
const arrayNumeriRandom = [];
// console.log(arrayNumeriRandom);

for(let i = 0; i < 5; i++){
    const numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    // console.log(numeroRandom);

    arrayNumeriRandom.push(numeroRandom);
}
//2. Inserire i 5 numeri in un alert
alert(arrayNumeriRandom);

//Allo scadere dell'alert creare un timer di 30 secondi
//1. Creare delle variabili del contatore e del timer
let counter = 30;
let time = 1000;
//2. Creare con setInterval un timer di 30 secondi
let clock = setInterval(onInterval, time);

//Allo scadere del timer creare un prompt dove l'utente dovrà scrivere i 5 numeri che ha letto nell'alert
const arrayNumeriUtente = [];

const numeroUtente1 = prompt('Inserisci il primo numero che ricordi.');
const numeroUtente2 = prompt('Inserisci il secondo numero che ricordi.');
const numeroUtente3 = prompt('Inserisci il terzo numero che ricordi.');
const numeroUtente4 = prompt('Inserisci il quarto numero che ricordi.');
const numeroUtente5 = prompt('Inserisci il quinto numero che ricordi.');

arrayNumeriUtente.push(numeroUtente1, numeroUtente2, numeroUtente3, numeroUtente4, numeroUtente5);
console.log(arrayNumeriUtente);

//Individuare quanti numeri sono stati indovinati e quanti no
for(let i = 0; i < 5; i++){
    let confrontoIndiceArray = arrayNumeriRandom[i] == arrayNumeriUtente[i];
    // console.log(confrontoIndiceArray);

    if(confrontoIndiceArray === false){
        console.log(confrontoIndiceArray, 'Non hai indovinato!!');
    }else{
        console.log(confrontoIndiceArray, 'Hai indovinato!!');
    }
}

//FUNZIONI//
function onInterval() {
    //1. Decrementare il counter
	counter--;
	// console.log(counter);

    //2. Creare un if-else per visualizzare quando il tempo è a 0 la fine del tempo e il blocco di esso
	if (counter === 0) {
		clearInterval(clock);
		console.log('Finito il tempo!!!');
	} else {
		console.log(counter);
	};
};
