//WORDS

//CORPUS - BODY OF TEXT
corpus = "Now is the time for all..."

count = 0
index=0
found = 0

while(index < corpus.length){
    letter = corpus[index]
    if(letter == " "){
        count++; 
        found = index;
    }
    index++;
}

if(found < corpus.length){
    count++;
}

console.log(count)


//SHORT VERSION
console.log(corpus.split(" ").length)
