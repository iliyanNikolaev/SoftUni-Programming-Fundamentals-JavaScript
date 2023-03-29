function counterStrike(input){
  let totalEnergy = Number(input.shift());
  let counterWins = 0;
  let energyOver = false;


  let command = input.shift();

  while(command !== 'End of battle'){

    let distance = Number(command);
    
    if(totalEnergy - distance >= 0){
      counterWins++;
      totalEnergy -= distance;
    } else {
      
      energyOver = true;
      break;
    }

    if(counterWins % 3 === 0){
      totalEnergy += counterWins;
    } 
    

    command = input.shift();
  }

  if(energyOver) {
    console.log(`Not enough energy! Game ends with ${counterWins} won battles and ${totalEnergy} energy`);
  } else {
    console.log(`Won battles: ${counterWins}. Energy left: ${totalEnergy}`);
  }
}

counterStrike((["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
);