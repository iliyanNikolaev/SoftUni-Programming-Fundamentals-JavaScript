function addAndRemove(commands) {
    
    let initNum = 1;
    let result = [];
    
    for(let command of commands) {

        switch(command) {

            case 'add':
                result.push(initNum);
                break;

            case 'remove':
                result.pop(initNum)
                break;
        }

        initNum++;
    }

    if(result.length === 0) {
        console.log('Empty')
    } else {
        console.log(result.join(' '));
    }
}

addAndRemove(['remove', 'remove', 'remove']);