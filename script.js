// ---------------- SLIDESHOW ----------------

const images = [
    "photo1.jpeg",
    "photo2.jpeg",
    "photo3.jpeg",
    "photo4.jpeg",
    "photo5.jpeg",
    "photo6.jpeg",
    "photo7.jpeg"
];

let currentIndex = 0;
const slide = document.getElementById("slide");

function showSlide(index){
    slide.style.opacity = 0;
    setTimeout(()=>{
        slide.src = images[index];
        slide.style.opacity = 1;
    },800); // smooth fade
}

function nextSlide(){
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

setInterval(nextSlide,5000);


// ---------------- TYPEWRITER ----------------

const text = `When I am six feet under one day,
and the earth learns my secrets,
let it also learm this-
that I loved once.
And I loved deeply.

I loved a man
who felt like home
without ever asking me to shrink.

When the paramedics check for my pulse,
they will hear the sound of your laugh,
and mistake it as the rhythm of my heart <3`;

let i = 0;
const speed = 35;
const typewriter = document.getElementById("typewriter");

function typeEffect(){
    if(i < text.length){
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}

window.onload = typeEffect;


// ---------------- MUSIC ----------------

const music = document.getElementById("bgMusic");

function toggleMusic(){
    if(music.paused){
        music.play();
    } else {
        music.pause();
    }
}


// ---------------- SOFT SPARKLES ----------------

for(let i=0;i<25;i++){
    let sparkle=document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left=Math.random()*100+"vw";
    sparkle.style.animationDuration=(6+Math.random()*6)+"s";
    sparkle.style.width=(4+Math.random()*6)+"px";
    sparkle.style.height=sparkle.style.width;
    document.body.appendChild(sparkle);
}
