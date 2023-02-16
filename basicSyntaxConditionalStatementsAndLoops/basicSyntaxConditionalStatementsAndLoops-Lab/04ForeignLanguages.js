function foreignLanguages(country) {

    let output = '';

    switch (country) {
        case 'England':
        case 'USA':
            output = 'English';
            break;

        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            output = 'Spanish';
            break;

        default:
            output = 'unknown';
            break;
    }

    console.log(output);
}

foreignLanguages('Germany');