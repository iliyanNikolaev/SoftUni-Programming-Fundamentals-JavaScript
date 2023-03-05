function companyUsers(input) {
    let obj = {};

    for (const line of input) {
        
        let [companyName, number] = line.split(' -> ');

        if(!obj.hasOwnProperty(companyName)){
            obj[companyName] = [];
        }

        if(!obj[companyName].includes(number)) {
            obj[companyName].push(number);
        }
    }

    let objEntries = Object.entries(obj);

    objEntries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const entry of objEntries) {
        console.log(entry[0]);
        
        for(let i = 0; i < entry[1].length; i++) {
            console.log(`-- ${entry[1][i]}`);
        }
    }
}

companyUsers(
    [
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
        ]
        
    
    )