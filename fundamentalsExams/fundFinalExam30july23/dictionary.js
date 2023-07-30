function solve(input) {
    let inputStr = input.shift();

    let words = inputStr.split(' | ');

    const dictionary = {};

    words.forEach(x => {
        const [word, definition] = x.split(': ');
        if (dictionary[word] == undefined) {
            dictionary[word] = [];
        }

        dictionary[word].push(definition);
    });

    const testingWords = input.shift().split(' | ');

    const action = input.shift();

    if (action == 'Hand Over') {
        let output = '';
        for (const key in dictionary) {
            output += `${key} `;
        }

        console.log(output.trim());
    } else {
        testingWords.forEach(x => {
            if (dictionary.hasOwnProperty(x)) {
                console.log(`${x}:`);
                dictionary[x].forEach(y => {
                    console.log(` -${y}`);
                })
            }
        })
    }
}

solve(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",

    "bit | code | tackle",

    "Test"])