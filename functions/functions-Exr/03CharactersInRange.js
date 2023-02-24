function charactersInRange (firstChar, secondChar) {

    const startPoint = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    const endPoint = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    
    let result = [];

    for(let currCharNum = startPoint + 1; currCharNum < endPoint; currCharNum++) {

        let currChar = String.fromCharCode(currCharNum);

        result.push(currChar);
    }

    console.log(result.join(' '));
}

charactersInRange('C', '#');