function town(inputData) {

    inputData.forEach(line => {
        let townInfo = {}; 

        let [town, latitude, longitude] = line.split(' | ');
        
        townInfo.town = town;
        townInfo.latitude = Number(latitude).toFixed(2);
        townInfo.longitude = Number(longitude).toFixed(2);

        console.log(townInfo);
    });
}

town (['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625']);