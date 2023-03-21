/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/


/* Analisi della consegna

//Funzione per generare 5 numeri casuali


//Funzione per far partire il timer dopo che sono stati generati tutti i numeri
    //Far sparire i numeri allo scadere del timer


//Dopo step-2, far inserire all'utente i 5 numeri
    //Indicare quanti e quali numeri sono stati individuati

*/


/* Individuazione degli elementi necessari

    - individuare dove andranno disposti i numeri casuali
    
    - generare attraverso una funzione i 5 numeri
        tenere in una variabile il valore di ognuno dei 5 numeri
    
        - attraverso la funzione setInterval generare un timer di 30 secondi (30'000ms)
        scaduto il tempo, rimuovere visivamente i numeri generati in precedenza
    
        - far inserire attraverso 5 campi di input i numeri generati all'inizio
        comparare i dati inseriti dall'utente con i numeri estratti
            indicare quanti e quali sono corretti

*/


const htmlRandomNumbers = document.getElementById("random-numbers");
const btnGenerateNumbers = document.getElementById("generate-numbers");


//generiamo 5 numeri casuali
function getRandomInt(min, max) {
    //creiamo un array vuoto e attraverso un ciclo while ci assicuriamo che i numeri all'interno non siano più di 5
    const randomNumbers = [];
    while (randomNumbers.length < 5) {
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        //tramite il metodo degli array includes, verifichiamo che il numero generato !sia presente nell'array randomNumbers
        if (!randomNumbers.includes(number)) {
            //se non c'è lo inseriamo
            randomNumbers.push(number);
        }
    }
    return randomNumbers;
}

function createInput() {
    const userNumbers = [];
    while (userNumbers.length < 5) {
        let input = document.createElement("input");
        input.setAttribute("type", "number");
        input.classList.add("d-block");
        inputContainer.append(input);
        userNumbers.push(input);
    }
    return (userNumbers, input);
}


function startTimeOut() {
    let count = 10;
    const intervalId = setInterval(timeOut, 1000);

    function timeOut() {
        count--;
        if (count === 0) {
            clearInterval(intervalId);
            htmlRandomNumbers.textContent = "";
            const title = document.createElement("h2");
            title.textContent = "Inserisci i numeri che hai memorizzato";
            htmlRandomNumbers.append(title);
            //richiamiamo createInput per generare i campi di input dopo che sarà scaduto il timeout
            createInput();
        }

    }
}

function getInputValues(userNumbers) {


}




//aggiungiamo un eventListener al btn per generare i numeri dopo il click
btnGenerateNumbers.addEventListener("click", function () {

    //richiamiamo la funzione che genera i numeri e attribuiamo i valori (min, max)
    const randomNumbers = getRandomInt(1, 50);
    //join ci permette di formattare gli elementi dell'array che verranno inseriti all'interno del paragrafo
    htmlRandomNumbers.textContent = randomNumbers.join(" - ");
    //richiamiamo la funzione startTimeOut per far partire il countdown
    startTimeOut();
})

const btnGetInputValues = document.getElementById("get-values");

btnGetInputValues.addEventListener("click", function () {

})




