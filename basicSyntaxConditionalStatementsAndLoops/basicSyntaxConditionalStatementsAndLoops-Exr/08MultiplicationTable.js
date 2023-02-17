function multiplicationTable(multiplicator){

    for (let i = 1; i <= 10; i++) {

        let result = multiplicator * i;

        console.log(`${multiplicator} X ${i} = ${result}`);
    }
}

multiplicationTable(5);