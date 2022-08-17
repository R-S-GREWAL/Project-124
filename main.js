function setup() 
{
video = createCapture(VIDEO);
video.size(300,300);
video.position(100,175);
canvas = createCanvas(500,350);
canvas.position(500,150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log('PoseNet is initialised');
}
