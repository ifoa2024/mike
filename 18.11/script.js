
let start = prompt('Are you ready?\n (A) Inizia la partita \n (B) Esci dal gioco')
console.log(start)

if (start == "A"){
    alert('il gioco sta iniziando...');
     let score = 0;
     while (score <= 5) {
         
         let enemy = prompt('attenzione al nemico, prova ad abbatterlo: \n (A) \n (B) ');
         switch (enemy) {
             case "A":
                 alert('Salta e supera il nemico 🏆');
                 score++;
                 alert(` il tuo punteggio è ${score}`)
                 break;
                 case "B":
                     alert('Sei stato colpito, perdi una vita😒');
                     
                     break;
                     
                     default:
                         alert('Non ho capito scusa')
                         break;
                        }
                        
                    }
     let enLife = 10;
    let myLife = 10;
    let boss = prompt('tieniti pronto, è il momento del boss finale, lo affonti? \n(A) Andiamoo \n(B) No, non ho coraggio')
    switch (boss) {
        case "A":
            while (enLife != 0) {
                let attack = prompt('Bravo, mi piacciono le persone convinte!💪💪 \n(A) Attaccalo \n(B) Aspetta la sua mossa')
                if( attack == "A"){
                    enLife--;
                    alert(`Hai colpito il boss!\n La sua vita è di ${enLife}`)
                }
                else{
                    myLife--
                    alert(`Cavolo, i suoi attacchi sono imparabili, ora hai ${myLife} vite! Valuta meglio le tue mosse!`)
                }
            }
            break;
    
        default:
            break;
    }
}else{
    alert('Arrivederci');
}

