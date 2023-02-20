function specialNums(n) {

    for (let i = 1; i <= n; i++) {

        let sum = 0;

        if (i > 9) {

            let iStr = i.toString();

            for (let j = 0; j < iStr.length; j++) {

                let currNum = Number(iStr[j]);

                sum += currNum;
            }
        } else {
            sum = i;
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNums(15);