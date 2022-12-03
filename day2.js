// Get data from file
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    let new_arr = [];
    for (let i = 0; i < arr.length; i++){
        new_arr.push(arr[i].split(" ").join(""));
    }
    return new_arr;
}


// Day 2 Challenge (No conditionals)

const data = syncReadFile('C:/Coding Projects/Advent Of Code/day2.txt');
let total_score = 0, toAdd = 0, outcome = 0;

// Part 1
for (let i = 0; i < data.length; i++){
    outcome = data[i].charCodeAt(0) + 23 - data[i].charCodeAt(1);
    toAdd = 3 * ((-1 * Math.round(Math.sin(outcome * Math.abs(outcome)))) + 1);
    total_score += toAdd + (data[i].charCodeAt(1) - 87);
}

console.log(total_score);


// Part 2
total_score = 0, toAdd = 0, outcome = 0;

let new_data = data.map(game => {
    let new_outcome = game.charCodeAt(1) - 89;
    return game[0] + String.fromCharCode(Math.round(Math.sin(2 * (new_outcome + game.charCodeAt(0) - 66))) + 66)
})

for (let i = 0; i < new_data.length; i++){
    outcome = new_data[i].charCodeAt(0) - new_data[i].charCodeAt(1);
    toAdd = 3 * ((-1 * Math.round(Math.sin(outcome * Math.abs(outcome)))) + 1);
    total_score += toAdd + (new_data[i].charCodeAt(1) - 64);
}

console.log(total_score);
