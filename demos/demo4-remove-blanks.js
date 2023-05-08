text = "   Now is    the   time...     "
//text = text.trim(); //trim the "fat" whitespace from both ends
parts = text.split(" ") //split into words
console.log("LENGTH:", parts.length)
count = 0
blanks = 0
output = []
//count only non-blank words
for(i = 0; i< parts.length; i++){
    word = parts[i]; //grab the word at this index

    // if(word.length != 0){ //make sure its not blank
    if(word != ""){ //make sure its not blank
        output.push(word)
        count++; //increase count by one
    }else{
        blanks++; //increase blanks by one
    }
}
console.log("COUNT:", count) //prit count
console.log("BLANKS:", blanks) //prit count
console.log(output.join(" ")) //glue the array of string together into a single string again
