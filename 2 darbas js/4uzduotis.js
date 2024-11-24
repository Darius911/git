"use strict"

const a = +prompt("Įveskite kainas a");
const b = +prompt("Įveskite kainas b");

const n1 = +prompt("Įveskite kiekius n1");
const n2 = +prompt("Įveskite kiekius n2");
const n3 = +prompt("Įveskite kiekius n3");

const bundPrice = +prompt("Įveskite bandelės kainą");

let numberOfBuns;
if (bundPrice <= a) {
  numberOfBuns = n1;
} else if (bundPrice > a && bundPrice < b) {
  numberOfBuns = n2;
} else {
  numberOfBuns = n3;

}

const totalCost = numberOfBuns * bundPrice;

console.log(`Julius sumokės už bandeles: ${totalCost.toFixed(2)} Lt.`);