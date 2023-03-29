function shoot(input) {
  let targets = input.shift().split(' ').map(x => Number(x));

  let command = input.shift();

  let endIndex = targets.length - 1;

  let availableIndexes = [];

  for(let i = 0; i <= endIndex; i++){

    availableIndexes.push(i);
  }

  let shotTargets = 0;

  while(command !== 'End'){

    let targetIndex = Number(command);
    

    if(availableIndexes.includes(targetIndex)){
      let targetNumber = targets[targetIndex];
      
      targets[targetIndex] = -1;
      shotTargets++;

      let indexForDelete = availableIndexes.indexOf(targetIndex);
      availableIndexes.splice(indexForDelete, 1);

      for(let i = 0; i <= endIndex; i++){

        if(targets[i] !== -1){

          if(targets[i] > targetNumber){
            targets[i] -= targetNumber;
          } else {
            targets[i] += targetNumber
          }
        }
      }
    }

    command = input.shift();
  }

  console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);
}



shoot(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])