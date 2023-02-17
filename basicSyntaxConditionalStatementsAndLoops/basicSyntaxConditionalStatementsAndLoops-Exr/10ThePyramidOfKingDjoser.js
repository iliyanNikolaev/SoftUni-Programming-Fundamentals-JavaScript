function pyramid(base, increment) {

    let width = base;
    let height = increment;
    let top = 1;

    if (base % 2 === 0) {
        top = 2;
    }

    let counter = 0;

    let totalBlocksStone = 0;
    let totalBlocksMarble = 0;
    let totalBlocksLapis = 0;
    let totalBlocksGold = 0;


    while (width >= top) {
        counter++;

        if (width === top) {
            let neededBlocksGold = width * width * increment;
            totalBlocksGold += neededBlocksGold;
            break;
        }

        let neededBlocks = width * width * increment;

        if (counter % 5 === 0) {
            let neededBlocksLapis = (width * 4 - 4) * increment;

            totalBlocksLapis += neededBlocksLapis;

            let neededBlocksStone = (neededBlocks - neededBlocksLapis);

            totalBlocksStone += neededBlocksStone;

        } else {

            let neededBlocksMarble = ((width * 4) - 4) * increment;

            totalBlocksMarble += neededBlocksMarble;

            let nujniBlokoveKamuk = (neededBlocks - neededBlocksMarble);

            totalBlocksStone += nujniBlokoveKamuk;
        }

        width -= 2;

    }

    totalBlocksStone = Math.ceil(totalBlocksStone);
    totalBlocksMarble = Math.ceil(totalBlocksMarble);
    totalBlocksLapis = Math.ceil(totalBlocksLapis);
    totalBlocksGold = Math.ceil(totalBlocksGold);
    height = Math.floor(increment * counter);

    console.log(`Stone required: ${totalBlocksStone}`);
    console.log(`Marble required: ${totalBlocksMarble}`);
    console.log(`Lapis Lazuli required: ${totalBlocksLapis}`);
    console.log(`Gold required: ${totalBlocksGold}`);
    console.log(`Final pyramid height: ${height}`);

}

pyramid(23, 0.5);
