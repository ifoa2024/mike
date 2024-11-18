# esercizi_javascript

**Esercizio 1: Dichiarazione di Variabili e Tipi di Dato**

- Dichiarare una variabile nome e assegnarle il valore "Mario".

- Dichiarare una variabile eta e assegnarle il valore 30.

- Dichiarare una variabile isStudente e assegnarle il valore true.

Stampa queste variabili in console. Esempio : **console.log( "Nome : " , nome )**



**Esercizio 2: Operatori Aritmetici**

- Dichiarare due variabili a e b e assegnarle i valori 10 e 5 rispettivamente.

- Creare una variabile somma che contenga il risultato della somma di a e b.

- Creare una variabile differenza che contenga il risultato della sottrazione di b da a.

- Creare una variabile prodotto che contenga il risultato della moltiplicazione di a per b.

- Creare una variabile quoziente che contenga il risultato della divisione di a per b.

Stampa queste variabili in console. Esempio : **console.log( "Somma: " , somma)**



**Esercizio 3**

- Scrivi due variabili con l’anno corrente e l’anno di nascita, e stampa in console: 

- l’età della persona, 

- quanti anni sono necessari per raggiungere i 100 e stampi in console la frase: “Hai 26 anni e ti mancano 74 anni per compierne 100” 



**EXTRA : **

- Dichiarare le variabili nome, cognome, eta, altezza (in metri), e peso (in kg) e assegnare loro valori appropriati. (Rappresentate delle persone che non esistono, non per forza voi stessi)

- Calcolare l'indice di massa corporea (IMC) usando la formula IMC = peso / altezza ** 2.

- Stampare in console il nome della persona in esame, con l'indice di massa corporea. **ESEMPIO** : console.log( `${name}, all'eta' di ${age} anni, ha un indice di massa corporea pari a ${imc}` )


ESERCITAZIONE CONDIZIONI E CICLI



Aula 1 - Scrive la documentazione su dropbox relativa a questa lezione di JS

Rivedere la lezione (anche a 2x)

Scrivere il recap

Pushate tutti gli esercizi su git hub e inviate il link della repository nel canale "repository" su discord ⁠h150-repository .



ESERCIZIO 1 :

Scrivere un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:

-se v è minore di 18, stampare in console “insufficiente” 

-se v è maggiore uguale a 18 e minore di 21, stampare in console “sufficiente” 

-se v è maggiore uguale a 21 e minore di 24, stampare in console: “buono”

-se v è maggiore uguale a 24 e minore di 27, stampare in console: “distinto”

-se v è maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”

-se v è uguale a 30, stampare in console: “eccellente” 

Esempio: let v = 29; Output: Ottimo

Cercate di risolvere questo esercizio utilizzando prima if, else e poi con switch, case.



ESERCIZIO 2 :

Scrivere un programma che converta una temperatura con una delle seguenti descrizioni: 

-se temperatura è minore di 20, stampare “non ci sono più le mezze stagioni” 

-se temperatura è maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu” 

-se temperatura è minore di 30, stampare “mi dia una peroni sudata” 

-se temperatura è minore di 0, stampare “non è tanto il freddo quanto l’umidità’” 

-se temperatura è minore di -10, stampare “copriti…ancora ti raffreddi” 

Cercate di risolvere questo esercizio utilizzando prima if else e poi con switch case.



ESERCIZIO 3

Scrivere un programma che simuli un distributore di bevande: fare in modo che l’utente possa inserire il numero corrispondente alla bevanda, mediante l’istruzione prompt:

se inserisce 1, seleziona acqua e quindi stampare in console: “È stata selezionata l’acqua”

se inserisce 2, seleziona coca cola e quindi stampare in console: “È stata selezionata coca cola”

se inserisce 3, seleziona birra e quindi stampare in console: “È stata selezionata birra”

se inserisce qualcosa di diverso, il programma dovrà riproporre la domanda di partenza

PS: Potete provare ad inserire condizioni e controlli ulteriori se volete sperimentare. Stupitemi! 



ESERCIZIO DEI DADI

Scrivi un programma che, dato il numero (N) dei tiri da effettuare per ciascun giocatore, simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti. Supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore



// Usiamo questa formula per generare un numero random

Math.floor(Math.random() * (max - min + 1) + min);
