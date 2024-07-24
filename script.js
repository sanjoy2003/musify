console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('rik.mp3');

let masterplay=document.getElementById('masterplay');
let myprogressBar=document.getElementById('myprogressBar');
let gif=document.getElementById('gif');
//let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songsName:"salam-e-Ishq",filepath:"spotify/rik.mp3",coverpath:"covers1/musc.jpg"}
]
    
    



masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play')
        gif.style.opacity=0;
    }
})
myprogressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myprogressBar.value=progress;
})
myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBar.value*audioElement.duration/100;
})