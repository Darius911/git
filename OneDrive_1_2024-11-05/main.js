"use strickt";

const soulioAukstis = +prompt("Iš kokio aukščio šoka parašiutininkas?");
const pagreitis =  9.8 ;
const m = +prompt("per kiek isiskledzia")
const laikas = Math.sqrt(soulioAukstis * 2 / pagreitis)
if (laikas >= m){
  console.log("Parašiutas išsiskleis");
} else if (laikas < m)  {
  console.log("Parašiutas neišsiskleis");
}





