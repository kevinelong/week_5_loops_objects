

// Boolean Expression - George Boole - English mathematician

// Did you bring your lunch or walk? NON-SENSE

// Syllogism
/*
ALICE IN WONDERLAND
syl·lo·gism
noun
noun: syllogism; plural noun: syllogisms

    an instance of a form of reasoning in which a conclusion is drawn (whether validly or not) from two given or assumed propositions (premises), each of which shares a term with the conclusion, and shares a common or middle term not present in the conclusion (e.g., all dogs are animals; all animals have four legs; therefore all dogs have four legs ).
*/

//  Get a gallon milk and if they have eggs then get a dozen.

// ! is the NOT operator
broughtLunch = true

inverted = !broughtLunch //opposite/inverted NOTed

console.log(inverted) // false?

// [x] NO ONIONS
no_onions = false
if(!no_onions){
    console.log("ADD ONIONS")
}
indoors = false
isRaining = true
needUmbrella = !indoors && isRaining
console.log(needUmbrella)

buyingToys = false
buyingFood = false
buyingBooks = true
goToATM = buyingToys || buyingFood || buyingBooks
console.log(goToATM)

painLevel = 6
daysFeltBad = 4

// goDoctor = painLevel > 4 && daysFeltBad > 3
// console.log(goDoctor)

if (painLevel > 5 || daysFeltBad > 7){
    console.log("GO TO DOCTOR")
}

result = (false || false) || (true && true)
console.log(result) 

//GAME LOOP
// while( !quit && !dead()){
//     play();
// }
// console.log("Thanks for playing")
