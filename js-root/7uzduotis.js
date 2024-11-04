"use strict"

let totalCountCups = parseInt(prompt("Puodelių, kuriuos reikia supakuoti"));
let oneBox = 3;
let fullBox = totalCountCups / oneBox;
let leftInStockCups = Math.ceil(fullBox - Math.floor(fullBox));


console.log("Pilnų dėžučių skaičius: " + Math.floor(fullBox));
console.log("Nesupakuotų puodelių skaičius: " + leftInStockCups)