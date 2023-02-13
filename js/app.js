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
let time = 3000;
//2. Creare con setInterval un timer di 30 secondi
let clock = setInterval(onInterval, time)

//Allo scadere del timer creare un prompt dove l'utente dovrà scrivere i 5 numeri che ha letto nell'alert

//Individuare quanti numeri sono stati indovinati e quanti no


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