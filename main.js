function setup(){
    canvas=createCanvas(300, 220);
    canvas.position(500, 400)
    video=createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/OFrzppRmg/model.json", modelLoaded())
}

function draw(){
    image(video, 0, 0, 320, 220);
    classifier.classify(video, gotResult)
}

function modelLoaded(){
    console.log("Model Loaded")
}

function gotResult(error, results){
    if(error){
        console.log(error);
        alert("Sorry! There was a teensy weensy error! Our Ira Wheera tech team is fixing it! Try again in a couple minutes!");
    }
    else{
        console.log(results);
        document.getElementById("spanobject").innerHTML=results[0].label;
        document.getElementById("spanaccur").innerHTML=results[0].confidence.toFixed(3);
    }
}