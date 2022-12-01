// Get data from file
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    let temp_arr = [];
    let new_arr = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i].length === 0){
            new_arr.push(temp_arr);
            temp_arr = [];
        } else {
            temp_arr.push(parseInt(arr[i]));
        }
    }
    return new_arr;
}


// Day 1 Challenge (Intentionally unreadable)
// Part 1

const lI = syncReadFile('C:/Coding Projects/Advent Of Code/day1.txt');

let I=0,l=0;
for(let ll=0;ll<lI.length;ll++){
    l=0;
    for(let lll=0;lll<lI[ll].length;lll++){l+=lI[ll][lll]}if(l>I){I=l}}
console.log(I);


// Part 2

let ii=lI.map(j=>{
    let iii=0;
    for (let i=0;i<j.length;i++){iii+=j[i]}
    return iii;
}).sort((l,I)=>I-l);
console.log(ii[0]+ii[1]+ii[2]);