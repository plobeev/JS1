///////////1


// var a = 1, b = 1, c, d;
//     c = ++a; alert(c);           // 2  т.к. форма префиксная, спрева переменной "c" присваивается значение переменнрй "a", затем инкрементирование переменнрй "a" (a=2);
//     d = b++; alert(d);           // 1  т.к. форма постфиксная, спрева переменной "d" присваивается значение переменнрй "b", затем инкрементирование переменной "b" (b=2);
//     c = (2+ ++a); alert(c);      // 5  сперва переменная "а"(2) увеличивается на 1, затем суммируется с 2; 
//     d = (2+ b++); alert(d);      // 4  переменной d присваиватся значение суммы 2 и "b" до увеличения "b" на 1;
// alert(a);                        // 3 "a" увеличивается на 1ед. в 1 и 3 выражении;
// alert(b);                        // 3 "b" увеличивается на 1ед. в 2 и 4 выражении;

///////////2


// var a = 2;
// var x = 1 + (a *= 2);  // x будет равен 5 { x = 1 + (a = a * 2) };

///////////3

var a = parseInt(Math.random() * 100 - 50);
var b = parseInt(Math.random() * 100 - 50);
document.write("a= " + a + "; b= " + b);

    if (a >= 0 && b >= 0){
        var res = a - b;
        document.write("<br> разность а и b = " + res);
    }
        else if (a < 0 && b < 0){
            var product = a * b;
            document.write("<br> произведение а и b = " + product);
        }
            else{
                var sum = a + b;
                document.write("<br> сумма а и b = " + sum);
            }


///////////4.1

    // var a = Math.round(Math.random() * 15);
    // document.write("a = " + a + "<br>");
    // switch(a){
    //     case 0: document.write(0 + " ");
    //     case 1: document.write(1 + " ");
    //     case 2: document.write(2 + " ");
    //     case 3: document.write(3 + " ");
    //     case 4: document.write(4 + " ");
    //     case 5: document.write(5 + " ");
    //     case 6: document.write(6 + " ");
    //     case 7: document.write(7 + " ");
    //     case 8: document.write(8 + " ");
    //     case 9: document.write(9 + " ");
    //     case 10: document.write(10 + " ");
    //     case 11: document.write(11 + " ");
    //     case 12: document.write(12 + " ");
    //     case 13: document.write(13 + " ");
    //     case 14: document.write(14 + " ");
    //     case 15: document.write(15 + " ");
    //     break;
    // }

///////////4.2


// var a = Math.round(Math.random() * 15);
//     document.write("a = " + a + "<br>");
//     function abc (a) {
//         if (a == 16) {
//             return;
//         }
//         document.write(a + " ");
//         abc(++a);
//     }

// abc(a);


///////////5


// function sum (a , b){
//     return x = a + b;
// }
// function res (a , b){
//     return x = a - b;
// }
// function multiplication  (a , b){
//     return x = a * b;
// }
// function division (a , b){
//     return x = a / b;
// }


///////////6

// function mathOperation (arg1 , arg2 , operation){
//     switch (operation){
//         case "+" : sum(arg1 , arg2 ); 
//         break;        
//         case "-" : res(arg1 , arg2 ); 
//         break;        
//         case "*" : multiplication(arg1 , arg2 ); 
//         break;        
//         case "/" : division(arg1 , arg2 ); 
//         break;
//     }

// }

// mathOperation(10,2,"/");

// document.write(x);


///////////7

// document.write(null > 0);   //false
// document.write(null < 0);   //false
// document.write(null <= 0);  //true
// document.write(null >= 0);  //true

// document.write(null == 0);  //false

// при сравнении null преобразуется в число "0", но не при нестрогом равенстве, где значение null не преобразуется в числовое и может бть равно только undefined;

///////////8

// function power (val , pow) {
//     if (pow == 0) {
//         return 1;
//     }
//     return val * power(val,pow - 1);    
// }

// var a = prompt(a);
// var b = prompt(b);
// alert(power(a,b));