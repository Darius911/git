"use strict"

let fishCount = +prompt ("Kiek zuvu akvariume");
let addFish = +prompt ("Kiek prideje zuvu");
let daysPast = +prompt ("Kiek dienu praejo");
let fishAfterDays = addFish * daysPast + fishCount

console.log (fishAfterDays)