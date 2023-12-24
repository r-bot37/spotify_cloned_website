console.log('Welcome to spotify clone!!');
//initialising variables
let songindex=0;
let audio1=new Audio('Unholy ft Kim Petras Lyric Video.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('mybar')
let gif=document.getElementById('giffy');
//making objects for name of song on display to be changed
let songs=[{songname:"Unholy",filepath:"Unholy ft Kim Petras Lyric Video.mp3",coverpath:"Spotify clone/cover1.jpeg"},
           {songname:"Snowman",filepath:"snowman.mp3",coverpath:"Spotify clone/snowmanimage.jpg"},
           {songname:"Heat Waves",filepath:"Heat Waves Official Video.mp3",coverpath:"Spotify clone/montreal-heat-wave-hot.jpg"},
           {songname:"Save Your Tears REMIX",filepath:"The_Weeknd_Ariana_Grande_Save_Your_Tears_Remix__(NaijaMusic.NG).mp3",coverpath:"Spotify clone/Tears-Remix.jpg"},
           {songname:"Bad Liar-Imagine Dragons",filepath:"Imagine_Dragons_Bad_Liar.mp3",coverpath:"Spotify clone/liar.jpg"}]
         
//handling play and pause click
masterplay.addEventListener('click',()=>{
    if(audio1.paused || audio1.currentTime<=0){
    audio1.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    gif.style.opacity=1;
}else{
    audio1.pause();
    masterplay.classList.remove('fa-pause');
    masterplay.classList.add('fa-play');
    gif.style.opacity=0;
}})

//listening to events
audio1.addEventListener('timeupdate',()=>{
    //update seekbar whenever time is updated
    //express progress in percentage
    progressuntil=parseInt((audio1.currentTime/audio1.duration)*100);
    myprogressbar.value=progressuntil;
})
//changing the song when the progress bar is changed
myprogressbar.addEventListener('change',()=>{
    audio1.currentTime=myprogressbar.value*audio1.duration/100;
})
//makeallplay function makes all the other other song items paused when one play is clicked
const makeallplay=()=>{
    Array.from(document.getElementsByClassName('songplaybutton')).forEach((Element)=>{
        Element.classList.remove('fa-pause');
        Element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songplaybutton')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        console.log(e.target);
        if(audio1.paused || audio1.currentTime<=0){
        //e.target gets us the element which is clicked upon
        makeallplay();
        songindex=parseInt(e.target.id)-1;
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        gif.style.opacity=1;
        audio1.src=songs[songindex].filepath;
        audio1.currentTime=0;
        audio1.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');}
        else{
            songindex=parseInt(e.target.id)-1;
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
            gif.style.opacity=0;
        audio1.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');}

 })
})

document.getElementById('next').addEventListener('click',()=>
{if(songindex>4)
    songindex=0;
    else{
        songindex=songindex+1;
        audio1.src=songs[songindex].filepath;
        audio1.currentTime=0;
        audio1.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
})
document.getElementById('previous').addEventListener('click',()=>
{if(songindex<=0)
    songindex=0;
    else{
        songindex=songindex-1;
        audio1.src=songs[songindex].filepath;
        audio1.currentTime=0;
        audio1.play();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }
})
