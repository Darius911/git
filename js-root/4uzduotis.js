"use strict"
let tunnelLength = 264 ;
let speed = prompt("Jusu greitis");
let speedInMetersPerSecond = (speed * 1000) / 3600;
let timeInSeconds = tunnelLength / speedInMetersPerSecond;




console.log("Automobilis tunelį pravažiuos per " + timeInSeconds + " s")