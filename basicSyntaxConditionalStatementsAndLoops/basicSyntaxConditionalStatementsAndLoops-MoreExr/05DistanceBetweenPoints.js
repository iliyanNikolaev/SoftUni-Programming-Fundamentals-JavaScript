function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    console.log(Math.sqrt(x * x + y * y));
}

getDistance(2, 4, 5, 0);