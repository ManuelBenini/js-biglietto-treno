/*
  a. Chiedere all'utente i km del viaggio
  b. Chiedere all'utente l'età del passeggero
  c. Calcolare prezzo totale del viaggio
  d. Il prezzo del biglietto è di 0.21€ al km
  e. Vi è uno sconto del 20% per i minorenni
  f. Vi è uno sconto del 40% per gli over 65
  g. L'output deve essere rappresentato con massimo due decimali


  1. Dichiarare le variabili
  2. Prompt km viaggio
  3. Prompt età
  4. Calcolare prezzo totale inserendo due condizioni di sconto
  5. Rappresentare l'output in pagina con massimo due decimali
*/

const km = parseInt(prompt('Inserire chilometri del viaggio'));
const age = parseInt(prompt('Inserire età del passeggero'));
const priceNotDiscounted = 0.21 * km;
let totalPrice;


if (age < 18){
  totalPrice = priceNotDiscounted - (priceNotDiscounted * 20 / 100);
} else if (age > 65){
  totalPrice = priceNotDiscounted - (priceNotDiscounted * 40 / 100);
} else{
  totalPrice = priceNotDiscounted;
}

const totalPriceDecimal = totalPrice.toFixed(2);

const travelOutput = `
Come inserito dall'utente, il viaggio &egrave; lungo ${km} chilometri ed il passeggero ha ${age} anni. <br>
Il prezzo totale che vi spetta con gli sconti applicati corrisponde a ${totalPriceDecimal} &euro;.
`;

document.getElementById('output').innerHTML = travelOutput