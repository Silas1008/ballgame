window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const balls = document.querySelectorAll(".balls div");


    // -----------Adding sounds----------------
    
    balls.forEach((ball, index) =>{
        ball.addEventListener('click', function(){
            sounds[index].currentTime = 0;
          sounds[index].play();
        });
    });
});

