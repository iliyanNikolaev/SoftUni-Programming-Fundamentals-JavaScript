//RegExp literal

let literalPattern = /[A-Za-z0-9]+/;

// RegExp constructor

let regexp = new RegExp('[A-Za-z0-9]');


let regexpTest = /\w+\(\)/g;

let text = `The RegExp() constructor directly returns the pattern argument 
only if pattern is a regex (among a few other conditions). If pattern is a regex, 
it would also interrogate() pattern's source and flags 
properties instead of coercing() pattern to a string.`

let match = regexpTest.exec(text);

while(match) {
    console.log(`Found ${match[0]} on index ${match.index}`);

    match = regexpTest.exec(text);
}

/* Output:
RegExp()
interrogate()
coercing()
*/

let modifiedText = text.replace(regexpTest, '****');

console.log(modifiedText)

/* Output:
The **** constructor directly returns the pattern argument 
only if pattern is a regex (among a few other conditions). If pattern is a regex, 
it would also **** pattern's source and flags 
properties instead of **** pattern to a string.
*/

//string match()

let matches = text.match(regexpTest);

for (const match of matches) {
    
    console.log(match);
}

/* Output:
RegExp()
interrogate()
coercing()
*/

//stringMatchAll

let allMatches = text.matchAll(regexpTest);

for (const match of allMatches) {
    
    console.log(match);
}

/* Output:
(1) ['RegExp()', index: 4, input: 'The RegExp() constructor directly returns the…es instead of coercing() pattern to a string.', groups: undefined]
(1) ['interrogate()', index: 161, input: 'The RegExp() constructor directly returns the…es instead of coercing() pattern to a string.', groups: undefined]
(1) ['coercing()', index: 225, input: 'The RegExp() constructor directly returns the…es instead of coercing() pattern to a string.', groups: undefined]
*/

console.log('------MoreExmp------')

// More Examples

//exec

let exampleText = 'a1b2c3d4e5f6g7h8e9';

let numsPattern = /[0-9+]/g;

let resultNumsArr = [];

let numMatch = numsPattern.exec(exampleText);
console.log(numMatch) // ['1', index: 1, input: 'a1b2c3d4e5f6g7h8e9', groups: undefined]

while(numMatch !== null) {

    resultNumsArr.push(numMatch[0]);

    numMatch = numsPattern.exec(exampleText);
}

console.log(resultNumsArr) // ['1', '2', '3', '4', '5', '6', '7', '8', '9']

//matchAll

let matchAllDigits = exampleText.matchAll(numsPattern);

console.log(matchAllDigits) // RegExpStringIterator

let matchedNumsArr = []

for (const match of matchAllDigits) {
    matchedNumsArr.push(match[0])
}

console.log(matchedNumsArr) // ['1', '2', '3', '4', '5', '6', '7', '8', '9']


// match

let matchedNumbers = exampleText.match(numsPattern);

console.log(matchedNumbers) //['1', '2', '3', '4', '5', '6', '7', '8', '9']


