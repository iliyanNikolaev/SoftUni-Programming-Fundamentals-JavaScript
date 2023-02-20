function cone(radius, height) {

    let volume = 1 / 3 * height * Math.PI * (radius * radius);

    let slantHeight = Math.sqrt(radius * radius + height * height);

    let lateralSurface = Math.PI * radius * slantHeight;

    let baseSurface = Math.PI * radius * radius;

    let totalArea = lateralSurface + baseSurface;


    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalArea.toFixed(4)}`);
}

cone(3, 5)