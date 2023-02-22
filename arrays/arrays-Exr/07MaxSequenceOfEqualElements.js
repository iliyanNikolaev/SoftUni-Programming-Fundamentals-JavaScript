function maxSequence(numbers) {
    let maxSeq = [];

    for (let i = 0; i < numbers.length; i++) {

        let currNum = numbers[i];
        let currSeq = [currNum];

        for (let j = i + 1; j < numbers.length; j++) {

            let nextNum = numbers[j];

            if (currNum === nextNum) {
                currSeq.push(nextNum);
            } else {
                break;
            }
        }

        if (currSeq.length > maxSeq.length) {
            maxSeq = currSeq;
        }
    }

    console.log(maxSeq.join(' '));
}


maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);