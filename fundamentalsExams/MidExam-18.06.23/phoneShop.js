function solve(input) {
    const phones = input.shift().split(', ');

    let command = input.shift();

    while (command != 'End') {
        const props = command.split(' - ');
        const action = props[0];

        switch (action) {
            case 'Add':
                const addPhone = props[1];

                if (!phones.includes(addPhone)) {
                    phones.push(addPhone);
                }

                break;
            case 'Remove': 
                const removePhone = props[1];

                if(phones.includes(removePhone)) {
                    const removeIndex = phones.indexOf(removePhone);

                    phones.splice(removeIndex, 1);
                }

                break;
            case 'Bonus phone':
                const [oldPhone, newPhone] = props[1].split(':');

                if(phones.includes(oldPhone)) {
                    let oldPhoneIndex = phones.indexOf(oldPhone);

                    phones.splice(++oldPhoneIndex, 0, newPhone);
                }

                break;
            case 'Last':
                const lastPhone = props[1];
                
                if(phones.includes(lastPhone)) {
                    const removeIndex = phones.indexOf(lastPhone);

                    phones.splice(removeIndex, 1);

                    phones.push(lastPhone);
                }

                break;
        }

        command = input.shift();
    }

    console.log(phones.join(', '));
}   

solve(["SamsungA50, MotorolaG5, IphoneSE",

"Add - Iphone10",

"Remove - IphoneSE",

"End"])