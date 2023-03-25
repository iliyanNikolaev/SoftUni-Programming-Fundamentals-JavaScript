function worldTour(input){
    let startingStr = input.shift();

    let line = input.shift();

    while(line !== 'Travel'){

        let lineArr = line.split(':');

        let action = lineArr[0];

        switch(action){
            case 'Add Stop': 
                let addIndex = Number(lineArr[1]);
                let strForAdd = lineArr[2];

                if(addIndex >= 0 && addIndex < startingStr.length){
                    startingStr = insertStr(startingStr, strForAdd, addIndex);
                }
                break;
            case 'Remove Stop': 
                let startIndex = Number(lineArr[1]);
                let endIndex = Number(lineArr[2]);

                if (startIndex >= 0 && startIndex <= endIndex && endIndex < startingStr.length){
                    startingStr = removeStr(startingStr, startIndex, endIndex);
                }
                break;
            case 'Switch': 
                let strForReplace = lineArr[1];
                let replacingStr = lineArr[2];

                if(startingStr.includes(strForReplace)){

                    startingStr = startingStr.replace(strForReplace, replacingStr);
                }
                break;
        }

        console.log(startingStr);

        line = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${startingStr}`);

    function insertStr(str, substr, index) {
        return str.slice(0, index) + substr + str.slice(index)
    }

    function removeStr(str, startIndex, endIndex){
        let stringForRemove = str.substring(startIndex, endIndex + 1);

        str = str.replace(stringForRemove, '');

        return str;
    }
}

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])



