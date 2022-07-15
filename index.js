// ADD EVENT LISTENER TO ALL BUTTONS

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// PLAY RESPECTIVE SOUNDS
function handleClick() {
	let buttonContent = this.innerHTML;

	makeSound(buttonContent);
    buttonAnimation(buttonContent)
}

// ADD EVENT LISTENER TO KEYBOARD

document.addEventListener("keydown", (event) => {
	makeSound(event.key);
    buttonAnimation(event.key)
});

// function handleKey(e){
//     makeSound(e.key)
// }


function makeSound(key) {
	switch (key) {
		case "w":
			let tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;

		case "a":
			let tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;

		case "s":
			let tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;

		case "d":
			let tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;

		case "j":
			let snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;

		case "k":
			let crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;

		case "l":
			let kick = new Audio("sounds/kick-bass.mp3");
			kick.play();
			break;

		default:
			console.log(buttonContent);
			break;
	}
}

function buttonAnimation(currentKey){

    let activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")

    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100)
}

