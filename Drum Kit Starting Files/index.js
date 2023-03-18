
for(var i=0 ; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    
    function handleClick(){
        // var playaudio = new Audio("sounds/tom-1.mp3");
        // playaudio.play();
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    }
    document.addEventListener("keydown",function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });
    function makeSound(key){
        switch (key) {
            case "w":
                var playaudio = new Audio("sounds/crash.mp3")
                playaudio.play();
                break;
            case "a":
                var playaudio = new Audio("sounds/kick-bass.mp3");
                playaudio.play();
                break;
            case "s":
                var playaudio = new Audio("sounds/snare.mp3");
                playaudio.play();
                break;
            case "d":
                var playaudio = new Audio("sounds/tom-1.mp3");
                playaudio.play();
                break;
            case "j":
                var playaudio = new Audio("sounds/tom-2.mp3");
                playaudio.play();
                break;
            case "k":
                var playaudio = new Audio("sounds/tom-3.mp3");
                playaudio.play();
                break;
            case "l":
                var playaudio = new Audio("sounds/tom-3.mp3");
                playaudio.play();
                break;
            default:
                console.log('Input a valid key');
                break;
        }

    }
    function buttonAnimation(currentKey){
        var activeButton = document.querySelector("."+currentKey);
        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100);
    }
}
