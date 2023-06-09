function solve(input){
    input = input.map(x => Number(x));
    const students = input.shift();
    const lectures = input.shift();
    const additionalBonus = input.shift();

    let maxAttends = Math.max(...input);

    let maxBonus = maxAttends / lectures * (5 + additionalBonus);

    if(students == 0){
        maxAttends = 0;
        maxBonus = 0;
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.\nThe student has attended ${Math.ceil(maxAttends)} lectures.`);
}

solve(['0', '30', '14']);