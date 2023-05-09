const data = [
    { name: "Kevin", age: 55 },
    { name: "Larry", age: 105 },
    { name: "Moek", age: 95 },
    { name: "Curly", age: 85 },
    { name: "Shep", age: 75 },
    { name: "Harpo", age: 65 },
    { name: "Kay", age: 55 },
]
sought = "k"
for(let i=0; i < data.length; i++){
    //MATCHES CRITERIA?
    if(data[i].name.toLowerCase().indexOf(sought.toLowerCase()) != -1){ //CONTAINS 
        console.log(data[i].name)
    }
}

// function contains(needle, haystack){
//     return haystack.indexOf(needle) != -1;
// }
// function startsWith(needle, haystack){
//     return haystack.indexOf(needle) == 0;
// }

// function seekAndPrint(sought){
//     for(let i=0; i < data.length; i++){
//         //MATCHES CRITERIA?
//         let person = data[i];
//         let name = person.name;
//         name = name.toLowerCase();
//         sought = sought.toLowerCase()

//         if(contains(sought, name)){
//         // if(name.indexOf(sought) != -1){
//         // if(data[i].name.toLowerCase().indexOf(sought.toLowerCase()) != -1){ //CONTAINS 
//             console.log(data[i].name)
//         }
//     }
// }
// seekAndPrint("k")
// .indexOf(SOUGHT) expressions
// != -1 means CONTAINS
// == 0 means STARTS_WITH
// complicated ENDS_WITH
