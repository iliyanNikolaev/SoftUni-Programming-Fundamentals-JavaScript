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

