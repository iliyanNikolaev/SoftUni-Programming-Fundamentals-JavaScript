function echoType(command){

    let typeOfCommand = typeof command;

    console.log(typeOfCommand);

    let result = '';

    switch (typeOfCommand){
        case 'number': result = command; break;
        case 'string': result = command; break;
        default: result = 'Parameter is not suitable for printing'; break;
    }

    console.log(result);
}

echoType(null);