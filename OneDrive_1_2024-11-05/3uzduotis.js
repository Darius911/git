"use strict"

const grade1 = +prompt("Kokius pažymius gavo Petriukas?");
const grade2 = +prompt("Kokius pažymius gavo Petriukas?");
const grade3 = +prompt("Kokius pažymius gavo Petriukas?");
const grade4 = +prompt("Kokius pažymius gavo Petriukas?");
const grade5 = +prompt("Kokius pažymius gavo Petriukas?");

const avgGrade = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;
if (avgGrade >9){
  console.log("Petriukas gaus tris saldainius");
} else if (avgGrade >= 7 && avgGrade <= 9) {
  console.log("Petriukas gaus du saldainius");
} else if  (avgGrade < 7){
  console.log("Petriukas gaus viena saldaini");
}

