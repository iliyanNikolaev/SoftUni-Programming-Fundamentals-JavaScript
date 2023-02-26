function songs(input) {
    let countSongs = input.shift();

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];

    for(let i = 0; i < countSongs; i++) {
        let currentSongArr = input.shift().split('_');

        let typeList = currentSongArr[0];
        let name = currentSongArr[1];
        let time = currentSongArr[2];

        let currentSong = new Song(typeList, name, time);

        songs.push(currentSong);
    }

    let searchedList = input.shift();
    
    if(searchedList === 'all') {
        songs.forEach(i => console.log(i.name));
    } else {
        let neededSongs = songs.filter(i => i.typeList === searchedList);

        neededSongs.forEach(i => console.log(i.name));
    }
    
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )