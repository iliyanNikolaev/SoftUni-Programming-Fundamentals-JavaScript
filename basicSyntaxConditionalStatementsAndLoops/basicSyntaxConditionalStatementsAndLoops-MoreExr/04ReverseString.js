function reverseString(text){
    
    let textLength = text.length;

    let result = '';

    for(let i = textLength - 1; i >= 0; i--){

        result += `${text[i]}`;
    }

    console.log(result);
}

reverseString('Hello');