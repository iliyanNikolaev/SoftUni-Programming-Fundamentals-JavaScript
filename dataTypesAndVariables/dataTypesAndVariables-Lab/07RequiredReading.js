function requiredReading(pages, pagesPerHour, days){
    let neededHoursTotal = pages / pagesPerHour;

    let neededHoursPerDay = neededHoursTotal / days;

    console.log(neededHoursPerDay);
}

requiredReading(432, 15, 4);