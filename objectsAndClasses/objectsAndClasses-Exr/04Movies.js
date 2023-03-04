function movies(input) {

    let movies = [];

    for (const line of input) {

        if (line.includes('addMovie')) {

            let [empty, name] = line.split('addMovie ');

            movies.push({ name });
        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');

            let movie = movies.find(el => el.name === name);

            if (movie) {
                movie.director = director;
            }
        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ');

            let movie = movies.find(el => el.name === name);

            if (movie) {
                movie.date = date;
            }
        }
    }

    for (const movie of movies) {

        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('date') && movie.hasOwnProperty('director')) {
            let movieJSON = JSON.stringify(movie);

            console.log(movieJSON);
        }
    }
}

movies([
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
        ]
        
)