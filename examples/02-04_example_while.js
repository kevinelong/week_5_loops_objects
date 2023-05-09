
let number = 1;
let iteration = 1; //increasing versions "mile post 0" a cycle
const LIMIT = 5

while (iteration < LIMIT) { //REPEAT IF(iteration is less than LIMIT)
    number = number * 2; // Double the number earch time we loop to grow
    console.log(iteration, number); //times cycled, how big we have grown
    iteration++; // iteration = iteration + 1
}//bottom of loop jups up to line 6 an re-evaluates the expression

console.log("FINISH because iteration is no longer less than LIMIT")

for(i=0; i < 5; i++){ //START
    console.log(i, "Kevin");
}
console.log("DONE")
