"use strict"

let pirmadienis  = +prompt ("pirmadienio pamoku skaicius");
let antradienis = +prompt ("antradienio pamoku skaicius");
let treciadienis  = +prompt ("treciadienio pamoku skaicius");
let ketvirtadienis  = +prompt ("ketvirtadienio pamoku skaicius");
let penktadienis  = +prompt ("penktadienio pamoku skaicius");
let totalLessons = (pirmadienis + antradienis + treciadienis +ketvirtadienis + penktadienis)
let totalMinutes = ((pirmadienis + antradienis + treciadienis +ketvirtadienis + penktadienis)*45)

console.log (totalLessons)
console.log (totalMinutes)





