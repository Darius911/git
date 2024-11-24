"use strickt";

const varlesSvoris = +prompt("Kiek sveria varlė?");
const stebimosVarles = +prompt("Kiek varlių norima stebėti?");
const maxSvoris = 5;
const result = varlesSvoris * stebimosVarles /1000;
if (result >= maxSvoris){
    console.log("Varlių stebėjimui pakanka");
} else if (result <= maxSvoris) {
    console.log("Varlių stebėjimui per mažai")
}
