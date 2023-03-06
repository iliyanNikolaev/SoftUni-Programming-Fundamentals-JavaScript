//found words on string

let text = 'some text some text some text some text some text';

let someIndex = text.indexOf('some');

while(someIndex >= 0) {
    console.log(`found on ${someIndex} index`);

    someIndex = text.indexOf('some', someIndex + 1);
}


/* Output:
found on 0 index
found on 10 index
found on 20 index
found on 30 index
found on 40 index
*/


//replace specific word on string

let str = 'This word will replaced word to be replaced, word power point excell, word'; // original string

let replacedStr = str.replace('word', 'something');

console.log(replacedStr); // This something will replaced word to be replaced, word power point excell, word


// demo indexOf method on string

//replacedStr -> 'This something will replaced word to be replaced, word power point excell, word'

let indexReplacedWord = replacedStr.indexOf('word'); 

console.log(indexReplacedWord); //29

let indexNotExistingWord = replacedStr.indexOf('notExist')
console.log(indexNotExistingWord) //-1


// replace all specific words on string 
//Note: replacedStr -> 'This something will replaced word to be replaced, word power point excell, word'


let index = replacedStr.indexOf('word');

while(index >= 0) {
    replacedStr = replacedStr.replace('word', 'something')

    index = replacedStr.indexOf('word');
}

//String afrer replace
console.log(replacedStr); // 'This something will replaced something to be replaced, something power point excell, something'



// replace all specific words on string - Another variant

let strStr = 'miglena miglena miglena';

while(strStr.includes('miglena')){

    strStr = strStr.replace('miglena', 'boyana');
}

console.log(strStr) // boyana boyana boyana


// trim method

let something = '      haha       ';

let trimedSomething = something.trim();

console.log(`|${trimedSomething}|`) // |haha|

console.log(something.trimStart()); //haha       .
console.log(something.trimEnd()); //       haha


//startWith(), endWith();

let exmpl = 'I am very good developer';

console.log(exmpl.startsWith('I')); //true 
console.log(exmpl.endsWith('developer')); //true




