function softUniReception(input) {

    let answeredQuestionsPerHour = Number(input[0]) + Number(input[1]) + Number(input[2]);

    let questions = Number(input[3]);

    let hoursCount = 0;

    while (questions > 0) {
        hoursCount++;

        if (hoursCount % 4 === 0) {
            hoursCount++;
        }

        questions -= answeredQuestionsPerHour;
    }

    console.log(`Time needed: ${hoursCount}h.`)
}

softUniReception(['3','2','5','40']);