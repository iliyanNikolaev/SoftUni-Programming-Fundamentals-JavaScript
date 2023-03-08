function cutAndReverse(text) {
    let textArr = text.split('').reverse();

    let firstHalf = '';
    let secondHalf = '';

    let avgIndex = (text.length / 2) - 1;

    for(let i = 0; i < text.length; i++) {

        if(i <= avgIndex) {
            secondHalf += textArr[i];
        } else {
            firstHalf += textArr[i];
        }
    }
    
    console.log(firstHalf)
    console.log(secondHalf)
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');