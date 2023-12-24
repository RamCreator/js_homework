function addNumbers(a, b) {
    return a + b;
}
// Example:
let sum = addNumbers(3, 5);
console.log(sum); // Output: 8
// Named Function 
let multiply = function multiplyNumbers(x, y) {
    return x * y;
};
// Anonymous Function 
let divide = function (x, y) {
    return x / y;
};

// Example :
let product = multiply(4, 6);
let quotient = divide(8, 2);

console.log(product); // Output: 24
console.log(quotient); // Output: 4

const square = (num) => num * num;
// Example :
let result = square(9);
console.log(result); // Output: 81