function passwordValidator(password) {

    let isSymbol = false;
    let diggitsCounter = 0;
    const validPassLength = password.length >= 6 && password.length <= 10;

    for (let index = 0; index < password.length; index++) {

        const currentCharNum = password[index].charCodeAt();

        const isDiggit = currentCharNum >= 48 && currentCharNum <= 57;

        const isLetter = currentCharNum >= 65 && currentCharNum <= 90 || currentCharNum >= 97 && currentCharNum <= 122;

        if (!isDiggit && !isLetter) {
            isSymbol = true;
        }

        if (isDiggit) {
            diggitsCounter++;
        }
    }

    if (!isSymbol && validPassLength && diggitsCounter >= 2) {
        console.log('Password is valid');
    }

    if (!validPassLength) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (isSymbol) {
        console.log('Password must consist only of letters and digits');
    }

    if (diggitsCounter < 2) {
        console.log('Password must have at least 2 digits');
    }
}

passwordValidator('Pa$s$s');