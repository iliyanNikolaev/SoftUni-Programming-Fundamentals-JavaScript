function solve(input){
    let rawKey = input.shift();

    let command = input.shift();

    while(command != 'Generate'){
        let props = command.split('>>>');
        const action = props[0];
        switch(action){
            case 'Slice': 
                const sliceStartIndex = Number(props[1]);
                const sliceEndIndex = Number(props[2]);
                const slicestr = rawKey.slice(sliceStartIndex, sliceEndIndex);
                rawKey = rawKey.replace(slicestr, '');
                console.log(rawKey);
                break;
            case 'Flip': 
                const casing = props[1];
                const flipStartIndex = Number(props[2]);
                const flipEndIndex = Number(props[3]);
                const flipStr = rawKey.slice(flipStartIndex, flipEndIndex);

                if(casing == 'Upper'){
                    rawKey = rawKey.replace(flipStr, flipStr.toUpperCase());
                } else {
                    rawKey = rawKey.replace(flipStr, flipStr.toLowerCase());
                }
                console.log(rawKey);
                break;
            case 'Contains':
                const containStr = props[1];
                
                if(rawKey.includes(containStr)){
                    console.log(`${rawKey} contains ${containStr}`);
                } else {
                    console.log('Substring not found!');
                }
                break;
        }

        command = input.shift();
    }

    console.log(`Your activation key is: ${rawKey}`);
}

solve(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

