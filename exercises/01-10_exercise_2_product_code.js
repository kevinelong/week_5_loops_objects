//EXAMPLE: supplierCode:productNumber-size

function parsePartCode(text){
    colon = text.indexOf(":")
    dash = text.indexOf("-")
    supplierCode = text.slice(0, colon)
    productNumber = text.slice(colon + 1, dash)
    size = text.slice(dash+1)

    return {
        supplierCode:supplierCode,
        productNumber: productNumber,
        size: size
        }
}


let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode +
" Product Number: " + part1.productNumber +
" Size: " + part1.size);