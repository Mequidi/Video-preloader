const toggleBtn = document.querySelector(".toggle-btn");
const videoContainer = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader-container");
const audio = document.querySelector(".audio");
window.addEventListener("load",function(){
    preloader.classList.add("hide-preloader");
})
toggleBtn.addEventListener("click",function(){
    if(!toggleBtn.classList.contains("slide"))
    {
        toggleBtn.classList.add("slide");
        videoContainer.pause();
        audio.pause();
    }    
    else
    {
        toggleBtn.classList.remove("slide");
        videoContainer.play();
        audio.play();
    }
})