function race(input) {
    
    const racersListArr = input.shift().split(', ');

    let patternName = /[A-Za-z]+/g;

    let patternDistance = /[0-9]+/g;

    let index = 0;

    let racersListObj = {};

    while(input[index] !== 'end of race') {

        let str = input[index];

        let name = str.match(patternName).join('');

        let distance = str.match(patternDistance).join('');

        if(racersListArr.includes(name)){

            let distanceTotal = 0;

            for (const digit of distance) {
                
                distanceTotal += Number(digit);
            }

            if(!racersListObj.hasOwnProperty(name)){
                racersListObj[name] = 0;
            }
            
            racersListObj[name] += distanceTotal;
        }

        index++;
    }

    let racersListEntries = Object.entries(racersListObj);

    let sortedList = racersListEntries.sort((a,b) => b[1] - a[1]);

    console.log(`1st place: ${sortedList[0][0]}`);
    console.log(`2nd place: ${sortedList[1][0]}`);
    console.log(`3rd place: ${sortedList[2][0]}`);
}

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
);