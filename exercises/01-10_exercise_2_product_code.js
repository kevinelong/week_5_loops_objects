//EXAMPLE: supplierCode:productNumber-size

function parsePartCode(text){
    
    colon = text.indexOf(":") // 3?
    dash = text.indexOf("-") // 8?
    
    supplierCode = text.slice(0, colon) // start ar first e.g. 0
    productNumber = text.slice(colon + 1, dash) // start after the colon
    
    size = text.slice(dash + 1) // with one argument, assumes we stop at the end

    return { //create a new object
        supplierCode: supplierCode, // key and variable happen to be the same
        productNumber: productNumber,
        size: size
    }
}

//TEST
let partCode1 = "XYZ:1234-L";

let part1 = parsePartCode(partCode1);

console.log(
    "Supplier: " + part1.supplierCode +
    " Product Number: " + part1.productNumber +
    " Size: " + part1.size
);