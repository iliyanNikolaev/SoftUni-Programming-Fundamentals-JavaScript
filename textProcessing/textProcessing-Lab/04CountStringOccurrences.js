function countStringOccurrences(text, word) {

    let arr = text.split(' ').filter(w => w === word).length;

    console.log(arr);
}

countStringOccurrences('This is a word and it also is a sentence',
'is'
)