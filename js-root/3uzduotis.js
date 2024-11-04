"use strict"


let monetCount5Cents = +prompt("Kiekis 5 centu monetu")
let cents5Monet = monetCount5Cents * 5
let monetCount20Cents = +prompt("Kiekis 20 centu monetu")
let cents20Monet = monetCount20Cents * 20
let monetCount2Litas = +prompt("Kiekis 2 Litu monetos")
let Litas2Monet =monetCount2Litas * 200

let allMonets = (cents5Monet + cents20Monet + Litas2Monet) / 100

console.log(allMonets)
