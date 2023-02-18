function nextDay(year, month, day){

    let date = new Date(year, month - 1, day)
    
    date.toLocaleDateString();
    
    console.log(date);
}

nextDay(2016, 9, 30);