function matrixNxN (num) {

    let rowGenerator = () => {
        
        let row = '';

        for(let i = 0; i < num; i++) {

            row += `${num} `
        }

        console.log(row);
    }

    for(let j = 0; j < num; j++) {
        
        rowGenerator();
    }
}   

matrixNxN(7);