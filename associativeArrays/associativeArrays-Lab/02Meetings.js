function meetings(input) {

    let obj = {};

    for (const line of input) {
        
        let [day, name] = line.split(' ');

        if(!obj.hasOwnProperty(day)) {
            obj[day] = name;
            console.log(`Scheduled for ${day}`)
        } else {
            console.log(`Conflict on ${day}!`)
        }
    }

    for (const day in obj) {
        console.log(`${day} -> ${obj[day]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);