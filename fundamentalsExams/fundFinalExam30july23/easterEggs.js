function solve(input){
    const regex = /[@|#]+(?<color>[a-z]{3,})[@|#]+[^a-z]{0,}[\/]{1,}(?<amount>[0-9]+)[\/]{1,}/gm;
    let match;

    while ((match = regex.exec(input[0])) !== null) {
        console.log(`You found ${match.groups.amount} ${match.groups.color} eggs!`);
    }
}

solve(['#@##@red@#/8/@rEd@/2/#@purple@////10/'])