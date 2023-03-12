function shopingList(input) {

    let listOfProducts = input.shift().split('!');

    let command = input.shift();

    while (command !== 'Go Shopping!') {

        let commandAsStr = command.split(' ');

        let action = commandAsStr[0];

        switch (action) {

            case 'Urgent':

                if (!listOfProducts.includes(commandAsStr[1])) {
                    listOfProducts.unshift(commandAsStr[1]);
                }
                break;
            case 'Unnecessary':

                if (listOfProducts.includes(commandAsStr[1])) {
                    let unnecessaryIndex = listOfProducts.indexOf(commandAsStr[1]);

                    listOfProducts.splice(unnecessaryIndex, 1);
                }
                break;
            case 'Correct':

                if (listOfProducts.includes(commandAsStr[1])) {
                    let correctIndex = listOfProducts.indexOf(commandAsStr[1]);

                    listOfProducts[correctIndex] = commandAsStr[2];
                }
                break;
            case 'Rearrange':

                if (listOfProducts.includes(commandAsStr[1])) {
                    let rearrangeIndex = listOfProducts.indexOf(commandAsStr[1]);

                    let item = listOfProducts.splice(rearrangeIndex, 1);

                    listOfProducts.push(item);
                }
                break;
        }

        command = input.shift();
    }

    console.log(listOfProducts.join(', '))

}

shopingList((["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])
);