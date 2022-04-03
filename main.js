noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){

    video=createCapture(VIDEO);
    video.size(600,600);
    video.position(50,75);
    //fix positions//
    canvas=createCanvas(500,500);
    canvas.position(1375,125);

    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);

}

function modelLoaded(){

    console.log('PoseNet is initialized');

}

function gotPoses(results){

    if(results.length>0){

        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = "+noseX+" nose y = "+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("left wrist x = "+leftWristX+" right wrist x = "+rightWristX+" difference = "+difference);
    }

}

function draw(){
    background('#2c093b');
    square(noseX,noseY,difference);
    fill('#ed42c8');
    stroke('#ed42c8');
    document.getElementById("square_side").innerHTML="Width and height of the square = "+difference+"px";
}