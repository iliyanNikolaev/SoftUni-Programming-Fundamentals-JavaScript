function loadingBar (percent) {
    let percentCount = percent / 10;

    let dotsCount = 10 - percentCount;

    if (percent === 100) {
        console.log('100% Complete!');
    } else {
        console.log(`${percent}% [${'%'.repeat(percentCount)}${'.'.repeat(dotsCount)}]`);
        console.log('Still loading...');
    }
}

loadingBar(100);