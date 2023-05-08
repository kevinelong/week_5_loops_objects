let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
];

TAX = 0.08
TIP = 0.18

let subtotal = 0
let total = 0

for(i=0;i<lunch.length;i++){
    subtotal += lunch[i].price
}
tax = subtotal * TAX
with_tax = subtotal + tax
tip = with_tax * TIP;
total = with_tax + tip
console.log(`
    SUBTOTAL: ${subtotal.toFixed(2)}
    TAX:      ${tax.toFixed(2)}
    TIP:      ${tip.toFixed(2)}
    ================================
    TOTAL:    ${total.toFixed(2)}
`)