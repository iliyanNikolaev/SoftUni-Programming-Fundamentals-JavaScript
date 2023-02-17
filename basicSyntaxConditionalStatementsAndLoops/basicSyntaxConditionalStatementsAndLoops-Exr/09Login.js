function login(arr) {

    let index = 0;

    let username = arr[index];
    index++;

    let password = '';

    for (let i = username.length - 1; i >= 0; i--) {

        password += `${username[i]}`;
    }

    let command = arr[index];
    index++;

    let counter = 0;
    let isBlocked = false;

    while (command !== password) {
        counter++;

        if (counter === 4) {
            isBlocked = true;
            break;
        }

        console.log('Incorrect password. Try again.');

        command = arr[index];
        index++;
    }

    if (isBlocked) {
        console.log(`User ${username} blocked!`);
    } else {
        console.log(`User ${username} logged in.`);
    }
}

login(['momo', 'omom']);