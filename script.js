// Animation Scroll Effects
document.addEventListener("scroll", function(){
  const elements = document.querySelectorAll('.Scrolling_effect');
  const windowHeight = window.innerHeight;

  elements.forEach(element => {
    const elementsPosition = element.getBoundingClientRect().top;

    if(elementsPosition  < windowHeight -100){
      element.classList.add('animate-show');
    }
    else {
      element.classList.remove('animate-show');
    }

  });
})






document.getElementById("scrollToExperience").addEventListener("click",function(){
  window.location.href = "#experience"
}) 


// project github Live Demo buttons
document.getElementById("QuizProgram").addEventListener("click", () => {
  window.open("https://pretheevi.github.io/quiz-program/", "_blank");
})

document.getElementById("MusicPlayerZootopia").addEventListener("click", () => {
  window.open("https://zootopia-try-everything.netlify.app/", "_blank");
})

document.getElementById("MusicPlayerJojo").addEventListener("click", () => {
  window.open("https://pretheevi.github.io/music-player-jojo/", "_blank");
})

document.getElementById("StopWatchLive").addEventListener("click", () => {
  window.open("https://pretheevi.github.io/Stop-Watch/", "_blank");
})

document.getElementById("PasswordGeneratorLive").addEventListener("click", () => {
  window.open("https://pretheevi.github.io/Password-Generator/", "_blank");
})


document.getElementById("MemoryGameLive").addEventListener("click", () => {
  window.open("https://pretheevi.github.io/memory-game/", "_blank");
})




// project github code button
document.getElementById("githubQuizProgram").addEventListener("click", () => {
  window.open("https://github.com/pretheevi/quiz-program", "_blank");
})

document.getElementById("githubJojo").addEventListener("click", () => {
  window.open("https://github.com/pretheevi/music-player-jojo", "_blank");
})

document.getElementById("githubZootopia").addEventListener("click", () => {
  window.open("https://github.com/pretheevi/Zootopia-Music-Player", "_blank");
})

document.getElementById("githubStopWatch").addEventListener("click", () => {
  window.open("https://github.com/pretheevi/Stop-Watch", "_blank");
})

document.getElementById("githubPasswordGenerator").addEventListener("click", () => {
  window.open("https://github.com/pretheevi/Password-Generator", "_blank");
})

document.getElementById("githubMemoryGame").addEventListener("click", () => {
  window.open("https://github.com/pretheevi/memory-game", "_blank");
})










