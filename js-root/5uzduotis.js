"use strict"

let wallLenght = prompt("Sienos ilgis");
let wallHight = prompt("Sienos plotis");
let brickPrice = prompt("Plytos kaina")
let wallArea = (wallHight * wallLenght)
let bricksWidth = 0.20;
let bricksHeight = 0.10;
let brickArea = 0.2 * 0.1;
let bricksCount = wallArea / brickArea;
let priceBricksTotal = bricksCount * brickPrice;
let roundetBricksCount = Math.ceil(bricksCount);
let roundetBricksTotal = priceBricksTotal.toFixed(2);

console.log("Plytų kiekis: " + roundetBricksCount);
console.log("Plytos kainuos " + roundetBricksTotal + " LT") ;