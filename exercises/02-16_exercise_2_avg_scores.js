
function getAverage(list){
    total = 0
    for(i=0;i<list.length;i++){
        total += list[i];
    }
    return total / list.length
}

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

mine = getAverage(myScores)
yours = getAverage(yourScores)
console.log("MINE:", mine)
console.log("YOURS:", yours)
console.log("DID I WIN?", mine > yours)
