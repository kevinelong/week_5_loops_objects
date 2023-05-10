data = [
    {name:"Moe", id:    222},
    {name:"Larry", id:  111},
    {name:"Curly", id:  444},
    {name:"Schlep", id: 333},
    {name:"Kevin", id:  0},
];

function displayList(list){
    for(let i=0; i < list.length; i++){
        console.log(list[i]);
    }
}

function compareNames(a,b){
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
}

function compareIds(a,b){
    if (a.id > b.id) {
        return 1;
    }
    if (a.id < b.id) {
        return -1;
    }
    return 0;
}

count = 1

function compareIdsFast(a,b){
    console.log(count++); //print and then increment
    return a.id - b.id; //short but the same above any positive vs any negative or 0 if identical
}

displayList(data)
data.sort(compareIdsFast)
displayList(data)

// https://www.youtube.com/results?search_query=sorting+algorithm+visualized+compared