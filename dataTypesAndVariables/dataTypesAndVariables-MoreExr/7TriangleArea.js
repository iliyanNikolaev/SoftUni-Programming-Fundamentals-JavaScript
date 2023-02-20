function triangleArea(firstSide, secondSide, thirdSide){

    let s = (firstSide + secondSide + thirdSide) / 2;

    let area = Math.sqrt(s * (s - firstSide) * (s - secondSide) * (s - thirdSide));

    console.log(area);
}

triangleArea(2, 3.5, 4);