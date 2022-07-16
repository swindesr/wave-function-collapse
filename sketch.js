let imageIn;

function preload() {
    imageIn = loadImage('samples/Flowers.png');
}

function setup() {
    const { width, height } = imageIn;
    createCanvas(400, 400);
    imageIn.loadPixels();
    console.log(getPatterns(imageIn.pixels, 3, width, height));
}

function draw() {
    background(0);
}