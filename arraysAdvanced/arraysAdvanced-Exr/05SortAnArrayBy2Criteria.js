function sortArrBy2Criteria(input) {

    let arr = input.sort((a,b) => {
        return a.length - b.length || a.localeCompare(b);
    })

    arr.forEach(element => {
        console.log(element);
    })
}

sortArrBy2Criteria(['alpha', 'beta', 'gamma']);