let arr = ['Mariya', 'Miglena', 'Loren', 'Anonymous', 'Daniela', 'Borislava', 'Sonya', 'Boyana'];

let secondArr = ['Yoana', 'Magdalena', 'Kristiyana'];

console.log(arr.length); // 8
console.log(secondArr.length); // 3


arr.push('Undefined'); // Add element to the end on the array
console.log(arr); // ['Mariya', 'Miglena', 'Loren', 'Anonymous', 'Daniela', 'Borislava', 'Sonya', 'Boyana', 'Undefined']


let girlsStr = arr.join(' ') // Convert array into String 
console.log(girlsStr) // Mariya Miglena Loren Anonymous Daniela Borislava Sonya Boyana Undefined


let strIntoArr = girlsStr.split(' '); // Convert String into array
console.log(strIntoArr); // ['Mariya', 'Miglena', 'Loren', 'Anonymous', 'Daniela', 'Borislava', 'Sonya', 'Boyana', 'Undefined']






