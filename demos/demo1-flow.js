
// LOOPS AND ARRAYS AND OBJECTS 

//REVIEW

console.log("START")

function getStatus(){
    age = 15
    LIMIT = 16

    if(age < LIMIT){ //LOGIC EXPRESSION BOOLEAN bool
        output = "May NOT Drive";
    }else{
        output = "May Drive"
    }
    return output;
}

console.log(getStatus()) //JUMPS UP TO LINE 9 FUNCTION DEFINITION
console.log(getStatus()) //JUMPS UP TO LINE 9 FUNCTION DEFINITION

//NEWISH STUFF

numbers = [11, 22, 33] // array/list of numbers
characters = ["A", "B", "C"] // character == letter

function display(element){
    console.log(element);
}

// data.forEach(element => {
//     console.log(element)
// });
numbers.forEach(display)
characters.forEach(display)

count = 10 //initialization

while(count > 0){ //test and retest expression
    console.log(count);
    count--; // decrement operator: count = count - 1
} //back up and re-test

//exit while loop after expression is false
console.log("BLAST OFF!!!")

// while(action != "QUIT"){ // GAME LOOP
//     //PLAY GAME
//     action = getPlayerAction()
//     showStatus();
// }
// console.log("GAME OVER")

//NOT JUST NUMBERS!
sentance = "Now is the time, for all good people, to come to the aid, of their planet.";
letter = ""
index = 0
while(letter != ","){
    letter = sentance[index]
    console.log(letter)
    index++;
}
//TRADITIONAL FOR LOOP
// (initial; expression; change)
word = "HAPPY"
for(i=0; i < word.length; i++ ){ //THIS IS THE WAY
    letter = word[i]
    console.log(letter);
}

console.log("FINISH")
