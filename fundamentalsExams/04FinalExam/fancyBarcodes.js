function solve(input) {
    const barcodesCount = Number(input.shift());
    const regex = /^@[#]+(?<word>[A-Z][A-Za-z0-9]{4,}[A-Z])@[#]+$/gm

    input.forEach(x => {

        const match = x.match(regex);

        if (match !== null) {
            const str = match[0];
            let group = '';

            for (let i = 0; i < str.length; i++) {

                if (!Number.isNaN(Number(str[i]))) {
                    group += str[i];
                }
            }

            if (group === '') {
                group = '00';
            }

            console.log(`Product group: ${group}`);
        } else {
            console.log('Invalid barcode');
        }
    })
}

solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
