m1="music.mp3";
m2="music2.mp3";

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet model is initialised");
}

function draw(){
    image(video,0,0,600,500);
}

function preload(){
    m1=loadSound("music.mp3");
    m2=loadSound("music2.mp3");
}