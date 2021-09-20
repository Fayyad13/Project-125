leftWristX = 0;
rightWristX = 0;
noseX = 0;
noseY = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 500);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initiated");
}

function draw()
{
    background("#3f3f47");
    textSize(difference);
    text("Fayyad", noseX, noseY);
    fill("#051db5");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " & rightWristX = " + rightWristX + " & difference = " + difference);
    }
}