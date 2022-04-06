Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/L5-RSrS2T/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model is Loaded !!');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The prediction is " + prediction;
    var utterthis = new SpeechSynethesisUtterance(speak_data_1);
    synth.speak(utterthis);
}

