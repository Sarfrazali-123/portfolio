const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
      nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
      nav.classList.remove('active');
    })
}

var messageArray = ["Front End Developer"];
var textPosition = 0;
var speed = 100;
var pauseDuration = 2000; // 2 seconds

typewriter = () => {
  document.querySelector('.message').innerHTML = messageArray[0].substring(0, textPosition) + "<span></span>";

  if (textPosition !== messageArray[0].length) {
    textPosition++;
  } else {
    // Pause for 2 seconds after completing the message
    setTimeout(() => {
      // Reset the position to 0 after the pause
      textPosition = 0;
      typewriter(); // Restart the typewriter
    }, pauseDuration);
    return; // Exit the function to prevent further execution during the pause
  }

  setTimeout(typewriter, speed);
}

window.addEventListener('load', typewriter);

