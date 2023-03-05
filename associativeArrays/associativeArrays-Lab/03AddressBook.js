function addressBook(input) {

    let obj = {};

    for (const line of input) {
        let [name, address] = line.split(':');

        obj[name] = address;
    }

    let objEntries = Object.entries(obj);
    
    objEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const el of objEntries) {
        
        console.log(`${el[0]} -> ${el[1]}`);
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);