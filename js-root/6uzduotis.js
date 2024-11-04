"use strict"

const ilgesneKrastine = parseInt(prompt("Trapecijos ilgesniojo pagrindo ilgis"));
const trumpesneKrastine = parseInt(prompt("Trapecijos trumpesniojo pagrindo ilgis"));
const aukstis = parseInt(prompt("Trapecijos aukštinės ilgis"));
const plotas = (ilgesneKrastine + trumpesneKrastine) / 2 * aukstis  ;

console.log("Trapecijos plotas: " + plotas);