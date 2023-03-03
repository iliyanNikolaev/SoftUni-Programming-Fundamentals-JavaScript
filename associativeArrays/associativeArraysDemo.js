//associative array synntax

let phoneBook = {

    'ilich': '0878iliyan',
    'boyana': '0882boyana',
    'sonya': '0887235sisisteff',
    'miglena': '088648meggy'
}

console.log(phoneBook.ilich); // 0878iliyan
console.log(phoneBook['boyana']) // 0882boyana

let name = 'miglena';

console.log(phoneBook[name]); // 088648meggy

// iterate associative array (Object)
for (const name in phoneBook) {

    console.log(`${name} => ${phoneBook[name]}`);
}

/* Output:
ilich => 0878iliyan
boyana => 0882boyana
sonya => 0887235sisisteff
miglena => 088648meggy 
*/


// check for some property in object

if (phoneBook.hasOwnProperty('miglena')) {
    console.log('Yes'); // Yes
}

if (phoneBook.hasOwnProperty('Kristiyana')) {
    console.log('Yes'); // NO OUTPUT
}

//Convert Object to array with nested arrays(key-value pair [kvp])
let phoneBookArr = Object.entries(phoneBook);
console.log(phoneBookArr);

for (const kvp of phoneBookArr) {

    console.log(kvp);
}

/* Output:
(2) ['ilich', '0878iliyan']
(2) ['boyana', '0882boyana']
(2) ['sonya', '0887235sisisteff']
(2) ['miglena', '088648meggy']
*/


console.log('------Separator------');


for(let [name, phone] of Object.entries(phoneBook)) {
    console.log(`${name} ${phone}`);
}

/* Output:
ilich 0878iliyan
boyana 0882boyana
sonya 0887235sisisteff
miglena 088648meggy
*/

//-- Sort associative array --

//1. declare assoc arr
let assocArr = {
    meggy: '2017',
    borislava: '2019',
    sonya: '2020',
    boyana: '2021'
}

//2. Convert assoc arr to normal arr

let arr = Object.entries(assocArr);

//3. Sort arr by keys [kvp -> "key-value pair"]
arr.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));


for (const entry of arr) {  // Note: This is a just print for better visual understanding
    
    let[name, year] = entry;

    console.log(name, year);
}

/* Output
borislava 2019
boyana 2021
meggy 2017
sonya 2020
*/

//4. Convert arr to the assoc arr
let backToAssocArr = Object.fromEntries(arr);

console.log(backToAssocArr) // Output: {borislava: '2019', boyana: '2021', meggy: '2017', sonya: '2020'}


// Map syntax

let phoneBookMap = new Map();

phoneBookMap.set('sonya', '088gabrovo');
phoneBookMap.set('miglena', '056burgas');
phoneBookMap.set('daniela', '098sunnyBeach');
phoneBookMap.set('lorry', '02sofia');

console.log(phoneBookMap) // output: {size: 4, sonya => 088gabrovo, miglena => 056burgas, daniela => 098sunnyBeach, lorry => 02sofia}
console.log(phoneBookMap.get('miglena')) // output: 056burgas
console.log(phoneBookMap.size) // output: 4

phoneBookMap.delete('lorry')
console.log(phoneBookMap) // output: {size: 3, sonya => 088gabrovo, miglena => 056burgas, daniela => 098sunnyBeach}

//iterate map

for (const name of phoneBookMap.keys()) {
    console.log(name)
}

/* Output:
sonya
miglena
daniela
*/

for (const value of phoneBookMap.values()) {
    console.log(value)
}

/* Output:
088gabrovo
056burgas
098sunnyBeach
*/

for (const [name, phone] of phoneBookMap.entries()) {
    console.log(`${name} ${phone}`)
}

/* Output: 
sonya 088gabrovo
miglena 056burgas
daniela 098sunnyBeach
*/


// convert map to object

let obj = Object.fromEntries(phoneBookMap.entries());
console.log(obj); // output: {sonya: '088gabrovo', miglena: '056burgas', daniela: '098sunnyBeach'}



