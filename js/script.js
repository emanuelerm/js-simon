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


/*
1. Mostrare all'utente 5 numeri random
    1.1 Generare 5 numeri random
    1.2 Mostrare in pagina i numeri
2. Far partire un timer di N secondi
3. Nascondere i numeri generati
4. Generare 5 input per l'utente
5. Al click su un pulsante confronto i 5 numeri dell'utente con i 5 numeri generati
    5.1 Leggo i valori inseriti dall'utente negli input e li salvo in un array
    5.2 Confronto userNumbers con randomNumbers

*/


/*
const htmlRandomNumbers = document.getElementById("random-numbers");
const btnGenerateNumbers = document.getElementById("generate-numbers");
const inputContainer = document.getElementById("input-container");

const randomNumbers = [];
const userNumbers = [];
const guessedNumbers = [];

function generateRandomNumbers(min, max) {
    // creiamo un array vuoto e attraverso un ciclo while ci assicuriamo che i numeri all'interno non siano più di 5
    // 1.1 Generare 5 numeri random
    while (randomNumbers.length < 5) {
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        //tramite il metodo degli array includes, verifichiamo che il numero generato !sia presente nell'array randomNumbers
        if (!randomNumbers.includes(number)) {
            //se non c'è lo inseriamo
            randomNumbers.push(number);
        }
    }
}


function createInput() {
    for (let i = 0; i < 5; i++) {
        let input = document.createElement("input");
        input.setAttribute("type", "number");
        input.classList.add("d-block");
        inputContainer.append(input);
    }
}

// Far partire un timer di N secondi
function startTimeOut() {
    let count = 10;
    const intervalId = setInterval(function timeOut() {
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

    }, 1000);


}


//aggiungiamo un eventListener al btn per generare i numeri dopo il click
btnGenerateNumbers.addEventListener("click", function () {
    //richiamiamo la funzione che genera i numeri e attribuiamo i valori (min, max)
    generateRandomNumbers(1, 50);
    //join ci permette di formattare gli elementi dell'array che verranno inseriti all'interno del paragrafo
    // 1.2 Mostrare in pagina i numeri
    htmlRandomNumbers.textContent = randomNumbers.join(" - ");
    //richiamiamo la funzione startTimeOut per far partire il countdown
    startTimeOut();
})

const btnGetInputValues = document.getElementById("get-values");

btnGetInputValues.addEventListener("click", function () {
    // leggo gli input
    const inputs = document.querySelectorAll('#input-container > input');
    for (let i = 0; i < inputs.length; i++) {
        userNumbers.push(inputs[i].value);
        console.log(inputs[i].value);
        if (randomNumbers.includes(userNumbers[i].value)) {
            guessedNumbers.push(userNumbers[i].value);
        }
        console.log(guessedNumbers);
    }

    // confronto
})
*/

// identifico nel dom dove andranno i numeri random
const randomNumbersContainer = document.querySelector("#random-numbers");
// identifico nel dom dove andranno i campi di input
const inputContainer = document.querySelector("#input-container");
// identifico nel dom dove andranno il bottone per comparare i numeri
const btnCompare = document.querySelector("#get-values");



// creo un array vuoto per randomNumbers
const randomNumbers = [];
// creo un array vuoto per userNumbers
const userNumbers = [];
// creo un array vuoto per i numeri indovinati
const guessedNumbers = [];

// attraverso la funzione generiamo 5 numeri casuali
function generateRandomNumbers(min, max) {
    while (randomNumbers.length < 5) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(randomNumber);
        // li inseriamo nell'array solo se non sono già presenti
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
}
// chiamo la funzione e genero i numeri random
generateRandomNumbers(1, 50);
// mostro i numeri all'utente
randomNumbersContainer.textContent = randomNumbers.join(" - ");
// definisco la funzione per il timeout
function startTimeOut() {
    setTimeout(function () {
        // allo scadere del tempo rimuovo i numeri random
        randomNumbersContainer.textContent = "";
        // generiamo i campi di input
        generateInput();
    }, 10000)
}
// creo la funzione per creare i 5 campi di input
function generateInput() {
    for (let i = 0; i < 5; i++) {
        let input = document.createElement("input");
        input.setAttribute("type", "number");
        inputContainer.append(input);
    }
}


function compareNumbers() {
    let userAttempts = document.querySelectorAll("#input-container > input");
    for (let i = 0; i < userAttempts.length; i++) {
        let numberUserAtempt = userAttempts[i];
        userNumbers.push(parseInt(numberUserAtempt.value));
    } for (let i = 0; i < randomNumbers.length; i++) {
        if (randomNumbers.includes(userNumbers[i])) {
            guessedNumbers.push(userNumbers[i]);
        }
    }
}

startTimeOut();

btnCompare.addEventListener("click", function () {
    compareNumbers();
    document.querySelector("#result").textContent = `Hai indovinato ${guessedNumbers.length} numeri, i numeri sono ${guessedNumbers.join(" - ")}`;
})

