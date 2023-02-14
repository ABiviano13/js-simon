//Creare un alert dove ci sono scritti 5 numeri random
//1. Creare 5 numeri random
const arrayNumeriRandom = [];

for(let i = 0; i < 5; i++){
    const numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    // console.log(numeroRandom);

    arrayNumeriRandom.push(numeroRandom);
}
// console.log(arrayNumeriRandom);
//2. Inserire i 5 numeri in un alert
alert(arrayNumeriRandom);

//Allo scadere dell'alert creare un timer di 30 secondi
//1. Creare delle variabili del timer
let time = 3000;
let points = 0;
//2. Creare con setInterval un timer di 30 secondi
//Allo scadere del timer creare un prompt dove l'utente dovrà scrivere i 5 numeri che ha letto nell'alert
const arrayNumeriUtente = [];

// const arrayNumeriVincenti = [];

let clock = setTimeout(() => {
    while(arrayNumeriUtente.length < arrayNumeriRandom.length){
        const numeroUtente = prompt('Inserisci un numero che ricordi.');
        arrayNumeriUtente.push(numeroUtente);
        // console.log(arrayNumeriUtente);

        // if(arrayNumeriRandom.includes(numeroUtente) && !arrayNumeriUtente.includes(numeroUtente)){
        //     console.log('indovinato');
        //     arrayNumeriVincenti.push(numeroUtente);
        // }

        // arrayNumeriUtente.push(numeroUtente);
    }

    //Individuare quanti numeri sono stati indovinati e quanti no
    for(let i = 0; i < 5; i++){
        let confrontoIndiceArray = arrayNumeriRandom[i] == arrayNumeriUtente[i];
        // console.log(confrontoIndiceArray);

        if(confrontoIndiceArray === false){
            console.log(confrontoIndiceArray, 'Non hai indovinato!!');
        }else {
            console.log(confrontoIndiceArray, 'Hai indovinato!!');
            points++
        }
    }    
    console.log(arrayNumeriUtente, points)

}, time);


