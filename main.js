img = "";
status = "";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectinig Objects";
}

function preload(){
 img= loadImage('dog_cat.jpg');
}

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("purple");
    text("Dog", 45, 75);
    noFill();
    stroke("purple");
    rect( 30, 60, 450, 350);

    fill("cyan");
    text("Cat", 320, 120);
    noFill();
    stroke("cyan");
    rect(300, 90, 270, 320); 
}