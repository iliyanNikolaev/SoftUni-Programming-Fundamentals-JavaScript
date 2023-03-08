function pascalCaseSpliter(text) {
    let result = '';
    let tempResult = text[0];

    for(let i = 1; i < text.length; i++) {
        let isLower = text[i].charCodeAt() >= 97 && text[i].charCodeAt() <= 122;

        if(isLower) {
            tempResult += text[i];
        } else {
            result += `${tempResult}, `;
            tempResult = text[i];
        }

        if(i === text.length - 1) {
            result += tempResult;
        }
    }

    console.log(result);
}

pascalCaseSpliter('ThisIsSoAnnoyingToDo');