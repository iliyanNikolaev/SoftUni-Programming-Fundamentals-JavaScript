function gramophone(bandName, albumName, songName){
    let songDuration = (albumName.length * bandName.length) * songName.length / 2;

    let oneRotation = 2.5;

    let totalRotations = songDuration / oneRotation;

    console.log(`The plate was rotated ${Math.ceil(totalRotations)} times.`);
}

gramophone('Rammstein', 'Sehnsucht', 'Engel');