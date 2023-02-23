function formatGrade(grade) {
    let anotation = '';

    if (grade < 3) {
        anotation = 'Fail';
    } else if (grade < 3.5) {
        anotation = 'Poor';
    } else if (grade < 4.5) {
        anotation = 'Good';
    } else if (grade < 5.5) {
        anotation = 'Very good';
    } else {
        anotation = 'Excellent';
    }

    if (anotation === 'Fail') {
        console.log(`${anotation} (2)`);
    } else {
        console.log(`${anotation} (${grade.toFixed(2)})`);
    }
}

formatGrade(3.99);