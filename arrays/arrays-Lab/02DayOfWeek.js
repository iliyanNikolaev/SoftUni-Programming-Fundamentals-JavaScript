function dayOfWeek(number){
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let index = number - 1;

    if (index > 6 || index < 0){
        console.log('Invalid day!');
    } else {
        console.log(days[index]);
    }
}

dayOfWeek(11);