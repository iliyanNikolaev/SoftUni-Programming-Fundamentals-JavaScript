function adAstra(input) {

    let str = input[0];

    let pattern = /(#{1}|\|{1})(?<product>[\w ]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]+)\1/g;

    let matches = str.matchAll(pattern);

    let items = [];

    let totalCalories = 0;

    for (const match of matches) {

        items.push({ item: match.groups.product, date: match.groups.date, calories: match.groups.calories });

        totalCalories += Number(match.groups.calories);
    }

    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    for (const item of items) {

        console.log(`Item: ${item.item}, Best before: ${item.date}, Nutrition: ${item.calories}`);
    }
}

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);