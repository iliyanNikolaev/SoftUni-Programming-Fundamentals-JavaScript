function matchDates(input) {
    let data = input[0];

    let pattern = /(?<day>[0-9]{2})([\/\.-])(?<month>[A-Z][a-z]+)\2(?<year>[0-9]{4})/g;

    let results = data.matchAll(pattern);

    for (const date of results) {

        console.log(`Day: ${date.groups.day}, Month: ${date.groups.month}, Year: ${date.groups.year}`);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);