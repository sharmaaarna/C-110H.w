Webcam.set({
    width:400,
    height:400,
    image_format:'png',
    png_quality:90
  });
  
  function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Selfie").innerHTML="<img id='howUdoing' src='"+data_uri+"'>";
    });
}

clasefier=('https://teachablemachine.withgoogle.com/models/klJzDtM9C/model.json',modelLoaded);
 function Speak(){
   hi=window.speechSynthesis;
   speakData1="prediction1 is"+prediction1;
   speakData2="prediction2 is"+prediction2;
   Sup=new SpeechSynthesisUtterance(speakData1+speakData2);
   hi.speak(Sup);
 }

 function ch(){
   img=document.getElementById('howUdoing');
   clasefier.classify(img,gotResult); 
 }

 function gotResult(error,result){
   if (error){
     console.log(error);
   }
   else{
     console.log(result);
    document.getElementById("p1_name").innerHTML=result[0].label;
    document.getElementById("p2_name").innerHTML=result[1].label;
    prediction1=result[0].label;
    prediction2=result[1].label;
    Speak();
    if(result[0].label=="HAND GESTURE 1"){
      document.getElementById("p1_emojis").innerHTML="&#128406";
    }
    else if(result[0].label=="HAND GESTURE 2"){
      document.getElementById("p1_emojis").innerHTML="&#128078";
    }
    else if(result[0].label=="HAND GESTURE 3"){
      document.getElementById("p1_emojis").innerHTML="&#128070";
    }
   }
 }