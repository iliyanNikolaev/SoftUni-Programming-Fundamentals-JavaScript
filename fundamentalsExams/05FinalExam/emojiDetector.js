function solve(input){
    const coolRegex = /[0-9]/gm;
    const regex = /(?<start>::|\*\*)(?<word>[A-Z]{1}[a-z]{2,})\1/gm;
    
    let coolness = 1;
    let match = '';
    const coolEmojis = [];

    const numbersInInput = [...input[0].matchAll(coolRegex)];
    const matchingWords = [...input[0].matchAll(regex)];

    numbersInInput.forEach(x => {
        coolness *= Number(x[0]);
    });

    matchingWords.forEach(x => {
        const word = x.groups.word;
        let sum = 0;
    
        for(let i = 0; i < word.length; i++){
            sum += word[i].charCodeAt();
        }

        if(sum > coolness){
            coolEmojis.push(x[0]);
        }
    });

    console.log('Cool threshold: ' + coolness);
    console.log(matchingWords.length + ' emojis found in the text. The cool ones are:');
    console.log(coolEmojis.join('\n'));
}

solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])