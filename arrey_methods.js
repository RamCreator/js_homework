// Original array
let arr = [1, 2, 3, 4, 5];

// Using push to add an element to the end
arr.push(6);
console.log(arr); 

// Using pop to remove the last element
let popElement = arr.pop();
console.log(arr); 

// Using shift to remove the first element
let shifElement = arr.shift();
console.log(arr); 

// Using unshift to add elements to the beginning
arr.unshift(0, 1);
console.log(arr); 

// Using splice to replace elements
arr.splice(2, 2, 'a', 'b');
console.log(arr); 

// Using concat to combine arrays
let arr1 = ['x', 'y', 'z'];
let concatArray = arr.concat(arr1);
console.log(concatArray);


let arr2= [1, 2, [3, 4], 5];

// Using slice to create a shallow copy of a portion of the array
let slicedArray = arr2.slice(1, 3);
console.log(slicedArray); 

// Using flat to flatten nested arrays
let arr3 = [1, 2, [3, 4, [5, 6]]];
let flatArray = arr3.flat(2);
console.log(flatArray); 

// Using includes to check if an element is in the array
let arr4 = [1, 2, 3, 4, 5];
let elementToCheck = 3;
let includesElement = arr4.includes(elementToCheck);
console.log(includesElement); 

