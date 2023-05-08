
// GRAMMAR 
// Class/Object - NOUN (PERSON PLACE OR THING) e.g. car 
// has Method   - VERB (ACTION WORD) e.g. run
// has Property - ADJECTIVE (Attributes) old, young, heavy, age 28

str = "abc"

console.log( str.length ) //property

d = new Date()

console.log( d.getTime() ) //method that returns a value

person = { ///CREATE AN OBJECT
    name: "Kevin",  //property 
    age: 55,        //property
    greet: () => console.log("Hello World!!!") // method
}

person.age++;//increment age 55->56
person.greet() // call the method

console.log(person.name)
console.log(person.age)

