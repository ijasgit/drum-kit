var numberOfButtons = document.querySelectorAll('.drum')
for (var i = 0; i < numberOfButtons.length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', fun)
    // console.log(i)
}
function fun() {
    // console.log("hello all !");
    var buttonPressed = this.innerHTML;
    makeSound(buttonPressed)
    buttonAni(buttonPressed)

}
document.addEventListener('keypress', fun2)
function fun2(event) {
    makeSound(event.key)
    buttonAni(event.key)
    console.log(event.key)
}
function makeSound(keys) {

    switch (keys) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;
        case 'j':
            var crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
        case 'k':
            var kick = new Audio('sounds/kick-bass.mp3')
            kick.play();
            break;
        case 'l':
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;

        default:
            break;
    }
}
function buttonAni(curkey) {
    var keyClicked = document.querySelector('.' + curkey);
    keyClicked.classList.add('pressed')
    setTimeout(function () {
        keyClicked.classList.remove('pressed')
    }, 100);

}


// var audio = new Audio('sounds/tom-1.mp3')
// audio.play();
