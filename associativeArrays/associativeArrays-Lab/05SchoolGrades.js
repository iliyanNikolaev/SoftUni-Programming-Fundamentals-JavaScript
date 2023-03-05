function schoolGrades(input) {
    let studentsData = {};

    for (const line of input) {
        let lineArr = line.split(' ');

        let name = lineArr.shift();

        let grades = lineArr.map(numStr => numStr = Number(numStr))

        if (!studentsData.hasOwnProperty(name)) {
            studentsData[name] = grades;
        } else {
            let concatGrades = studentsData[name].concat(grades);

            studentsData[name] = concatGrades;
        }
    }

    let studentsDataEntries = Object.entries(studentsData);

    studentsDataEntries.sort((a, b) => a[0].localeCompare(b[0]));

    let sortedStudentsData = Object.fromEntries(studentsDataEntries);

    for (const element in sortedStudentsData) {

        console.log(`${element}: ${getAvg(sortedStudentsData[element])}`);
    }

    function getAvg(arr) {
        let arrLength = arr.length;
        let sum = 0;
        for (const num of arr) {
            sum += num;
        }

        let average = (sum / arrLength).toFixed(2);

        return average;
    }
}

schoolGrades(
    ['Lilly 4 6 6 5',
        'Tim 5 6',
        'Tammy 2 4 3',
        'Tim 6 6']

);