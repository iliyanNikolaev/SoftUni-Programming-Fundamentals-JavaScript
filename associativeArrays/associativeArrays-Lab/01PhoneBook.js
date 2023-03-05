function phoneBook(input) {

    let obj = {};
    
    for (const line of input) {
        
        let [name, number] = line.split(' ');

        obj[name] = number;
    }

    for (const el in obj) {

        console.log(`${el} -> ${obj[el]}`);
    }
}

phoneBook(
    ['George 0552554',
        'Peter 087587',
        'George 0453112',
        'Bill 0845344']
);