let products = [
    {product: "Zaphods' Doubleheads", price: 5.79},
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Annies Stars", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
];

    function printProductList(products){
        for(let i=0;i<products.length;i++){
            console.log(products[i].product, products[i].price);
        }
    }

    
    products.sort((a,b)=>{
        if (a.product < b.product){
            return -1;
        }else if (a.product == b.product){
             return 0;
        }else{
            return 1;
        }
    })

    printProductList(products)
console.log("-------------------")
// products.sort((a,b)=>{
//     if (a.price < b.price){
//         return -1;
//     }else if (a.price == b.price){
//          return 0;
//     }else{
//         return 1;
//     }
// })

products.sort((a,b) => a.price - b.price)
printProductList(products)
