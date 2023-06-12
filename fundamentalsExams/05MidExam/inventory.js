function solve(input) {
    const items = input.shift().split(', ');

    let [command, item] = input.shift().split(' - ');

    while (command != 'Craft!') {

        switch (command) {
            case 'Collect':
                if (!items.includes(item)) {
                    items.push(item);
                }
                break;
            case 'Drop':
                if (items.includes(item)) {
                    const index = items.indexOf(item);

                    items.splice(index, 1);
                }
                break;
            case 'Combine Items':
                const [oldItem, newItem] = item.split(':');

                if (items.includes(oldItem)) {
                    let index = items.indexOf(oldItem);

                    items.splice(++index, 0, newItem);
                }
                break;
            case 'Renew':
                if (items.includes(item)) {
                    const index = items.indexOf(item);
                    items.splice(index, 1);
                    items.push(item);
                }
                break;
        }

        [command, item] = input.shift().split(' - ')
    }

    console.log(items.join(', '));
}

solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  
)