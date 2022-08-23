"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
console.log(reader.data[0][0]);
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
    3;
}
console.log(`Man united won ${manUnitedWins} games 🤕🤕`);
