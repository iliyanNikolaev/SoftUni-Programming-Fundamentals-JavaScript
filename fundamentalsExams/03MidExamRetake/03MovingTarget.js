function movingTarget(input) {
  let targets = input.shift().split(' ').map(num => Number(num));

  let command = input.shift();

  while(command !== 'End'){
    command = command.split(' ');

    let action = command[0];
    
    switch(action){
      case 'Shoot':
        let shootIndex = Number(command[1]);
        let shootPower = Number(command[2]);

        if(shootIndex >= 0 && shootIndex < targets.length){

          targets[shootIndex] -= shootPower;

          if(targets[shootIndex] <= 0){

            targets.splice(shootIndex, 1);
          } 
        }
        break;
      case 'Strike':
        
        let strikeIndex = Number(command[1]);
        let strikeRange = Number(command[2]);

        if((strikeIndex - strikeRange) >= 0 && (strikeIndex + strikeRange) < targets.length){

          let startIndex = strikeIndex - strikeRange;
          
          let countTargetsForDelete = strikeRange+strikeRange+1;

          targets.splice(startIndex, countTargetsForDelete);
        } else {
          console.log('Strike missed!');
        }
        break;
      case 'Add':
        let addIndex = Number(command[1]);
        let addElement = Number(command[2]);

        if(addIndex >= 0 && addIndex < targets.length){

          targets.splice(addIndex, 0, addElement);
        } else {
          console.log('Invalid placement!');
        }
        break;
    }

    command = input.shift();
  }

  console.log(targets.join('|'));
}

movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]
);