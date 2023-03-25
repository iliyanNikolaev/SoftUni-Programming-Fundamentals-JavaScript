let arr = ['Mariya', 'Miglena', 'Loren', 'Anonymous', 'Daniela', 'Borislava', 'Sonya', 'Boyana'];

let secondArr = ['Yoana', 'Magdalena', 'Kristiyana'];

console.log(arr.length); // 8
console.log(secondArr.length); // 3


arr.push('Undefined'); // Add element to the end on the array
console.log(arr); // ['Mariya', 'Miglena', 'Loren', 'Anonymous', 'Daniela', 'Borislava', 'Sonya', 'Boyana', 'Undefined']

arr.pop(); // Remove element from the end
console.log(arr); // ['Mariya', 'Miglena', 'Loren', 'Anonymous', 'Daniela', 'Borislava', 'Sonya', 'Boyana']



let girlsStr = arr.join(' ') // Convert array into String 
console.log(girlsStr) // Mariya Miglena Loren Anonymous Daniela Borislava Sonya Boyana 


let strIntoArr = girlsStr.split(' '); // Convert String into array
console.log(strIntoArr); // ['Mariya', 'Miglena', 'Loren', 'Anonymous', 'Daniela', 'Borislava', 'Sonya', 'Boyana']

arr.unshift('Yoana'); // Add element to the beginning
console.log(arr); // ['Yoana', 'Mariya', 'Miglena', 'Loren', 'Anonymous', 'Daniela', 'Borislava', 'Sonya', 'Boyana']

arr.shift(); // Remove element from the beginning
console.log(arr); // ['Mariya', 'Miglena', 'Loren', 'Anonymous', 'Daniela', 'Borislava', 'Sonya', 'Boyana']

let newArr = arr.slice(2, 7); // Cut the part from array // arr.slice(startIndex, endIndex]
console.log('Original array -> ', arr); // ['Mariya', 'Miglena', 'Loren', 'Anonymous', 'Daniela', 'Borislava', 'Sonya', 'Boyana']
console.log('Sliced array -> ', newArr); // ['Loren', 'Anonymous', 'Daniela', 'Borislava', 'Sonya']

newArr.splice(1, 1);  // Remove current element or elements from array //newArr.splice(startIndex, countElementsForDelete)
console.log(newArr); // ['Loren', 'Daniela', 'Borislava', 'Sonya']

newArr.splice(1, 0, 'Anonymous') // Add element or elements on specify index // newArr(startIndex, countElementsForDelete, 'elementForAdd')
console.log(newArr); // ['Loren', 'Anonymous', 'Daniela', 'Borislava', 'Sonya']

let lengths = arr.map(element => element.length); // Trasform the array
console.log(lengths); // [6, 7, 5, 9, 7, 9, 5, 6]

let lengthsToStr = lengths.map(element => element.toString()) // Transform elements on array from numbers to strings
console.log(lengthsToStr); // ['6', '7', '5', '9', '7', '9', '5', '6']

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10, 12, 14, 16]

let evenNumbers = numbers.filter(number => number % 2 === 0); // Takes elements for whitch the condition is true
console.log(evenNumbers); // [2, 4, 6, 8]
let oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers); // [1, 3, 5, 7]

let testArray = ['Ilich', 227, 'Nikolaevic', 808];
let resultArray = testArray.filter(el => typeof el === 'string');
console.log(resultArray); // ['Ilich', 'Nikolaevic']
let secondResultArray = testArray.filter(el => typeof el === 'number');
console.log(secondResultArray); // [227, 808]

let evenPositionsNumbers = numbers.filter((x, i) => i % 2 === 0); // numbers -> [1, 2, 3, 4, 5, 6, 7, 8]
console.log(evenPositionsNumbers); // [1, 3, 5, 7]

let randomNumbers = [30, 32, 1, 4, 0, 12, 5, 3];
randomNumbers.sort((a,b) => a-b); // sorting numbers
console.log(randomNumbers); // [0, 1, 3, 4, 5, 12, 30, 32]

arr.sort((a, b) => a.localeCompare(b)); // sorting strings
console.log(arr); // ['Anonymous', 'Borislava', 'Boyana', 'Daniela', 'Loren', 'Mariya', 'Miglena', 'Sonya']

// reduce method

let numbersArr = [1, 2, 3, 4, 5];

let sum = numbersArr.reduce((acc, num) =>{return acc + num}, 0);

console.log(sum) // 15














