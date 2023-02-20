function tripleLetters(n) {

    for (let first = 0; first < n; first++) {

        for (let second = 0; second < n; second++) {

            for (let third = 0; third < n; third++) {

                console.log(`${String.fromCharCode(97 + first)}${String.fromCharCode(97 + second)}${String.fromCharCode(97 + third)}`);
            }
        }
    }
}

tripleLetters(3);