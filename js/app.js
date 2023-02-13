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

//Allo scadere del timer creare un prompt dove l'utente dovrà scrivere i 5 numeri che ha letto nell'alert

//Individuare quanti numeri sono stati indovinati e quanti no