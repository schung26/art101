/**
 * Author:  Sharon Chung and Leola Sanchez
 * Created:   10.28.2021
 * License: Public Domain.
 **/

 function isEven(x){
    return (x % 2 == 0);
}
undefined
isEven(1)
false
isEven(2)
true
array = [4, 6, 8, 10, 12, 14, 16]
(7) [4, 6, 8, 10, 12, 14, 16]
array.map(isEven)
(7) [true, true, true, true, true, true, true]
array.map(function(x){
    return x + 20;
})
(7) [24, 26, 28, 30, 32, 34, 36]

//testfunction
console.log("Is 3 even?)", isEven(3));
console.log("is 4 even?)", isEven(4));

array = (50, 100, 150, 200, 250, 300)
console.log("My array", array);

var result = array.map(isEven);
console.log("Test addition of array:", result);

var result = array.map(function(x){
    return x + 20;
  })

  console.log("addition of array", result);
