
///////////1

var x=2,n=2;
while (x <= 100) {  
    var n=2;
    while (n <= x) {
        if (x % n == 0 ) {
            break;
        }
        n++;
    }
        if (x==n)  {
            document.write(x + "<br>");
        }
    x++;
}

///////////2_3

// var cart = [
//     {
//         title: "Товар 1",
//         price: 200,
//         count: 5,
    
//     },
//     {
//         title: "Товар 2",
//         price: 250,
//         count: 4,
//     },
//     {
//         title: "Товар 3",
//         price: 500,
//         count: 3,
//     },
//     {
//         title: "Товар 4",
//         price: 1500,
//         count: 1,
//     }
// ];

// function countBasketPrice (arr){
//     var endPrice = 0;
//     for (var item of arr){
//         endPrice = item.price * item.count + endPrice;
//         document.write(item.title + " " + item.price + "$ " + item.count + "<br>");
//     }
//     document.write(endPrice)
// }

// countBasketPrice(cart)



///////////4


// for ( var i = 1; i < 10;document.write(i) , i++){};


///////////5

// var i, b = prompt("Введите количество строк");
// var pyramid = [];
// for ( i = 1; i <= b; i++){    
//     pyramid.push("x");
//     console.log(pyramid + "");
// }
