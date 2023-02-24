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







