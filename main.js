song1 = "";

function preload(){
song1 = loadSound("alaram.mp3")
}

function setup(){
canvas = createCanvas(640 , 420);
canvas.center();

video = createCapture(VIDEO);
video.hide();
objectDetector = ml5.objectDetector('cocossd' , modelLoaded)
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
image(video , 0 , 0 , 640 , 420);
for(i = 0; i<objects.length; i++){
if(objects[i].label == "person"){
        document.getElementById("status").innerHTML = "Baby Found";
        document.getElementById("status").innerHTML = "Status : Objects Detected";
        song1.stop();
        }
        
else{
        document.getElementById("status").innerHTML = "Baby not Found";
        document.getElementById("status").innerHTML = "Status : Objects Detected";
        song1.play();
        }

if(object.length = 0){
    document.getElementById("status").innerHTML = "Baby not Found";
    document.getElementById("status").innerHTML = "Status : Objects Detected";
    song1.play();
    }
    
}     
}

function gotResults(error , results){
if(error){
console.log(error)
}
else{
console.log(results);
}
}

function modelLoaded(){
console.log("model is Loaded")
status = true;
objectDetector.detect(video , gotResults);
}
