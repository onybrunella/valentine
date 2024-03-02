let noButtonClickable = true;
const noButton = document.getElementById("noButton");
/**
 * Decline function.
 * Changes the image, text, and styling when the "no" button is clicked.
 */
function decline() {
    if (noButtonClickable) {
        // Get the image elements
        const img = document.getElementsByClassName("img")[0];     // Link to the gif : https://tenor.com/fr/view/mario-guns-gun-nobodycaresboutya-gif-11779074565004365658
        const birdImg = document.getElementsByClassName("bird-img")[0];   // Link to the gif : https://tenor.com/fr/view/cat-diragana-meow-the-tabby-cat-angry-breathing-fire-gif-14255381

        // Set the new source for the images
        img.src = "assets/img/mario-guns.gif";
        birdImg.src = "assets/img/cat-diragana.gif";
        
        // Set styles for the images
        img.style.width = "300px";
        img.style.height = "300px";
        birdImg.style.height = "400px";
        birdImg.style.width = "400px";

        // Set the text content
        document.querySelector(".text").innerText = "NOOOOOOOOOOOOOOOOOOOOO ??????????!!!!!!!!!! YOU DONT LOVE ME ??????????????!!!!!!!!!";

        // Apply a anger animation to the images
        img.style.animation = "angerAnimation 1s ease";
        birdImg.style.animation = "angerAnimation 1s ease";

        // Disable button interaction
        noButtonClickable = false;
        noButton.addEventListener("mouseover", moveButton);
    }
}
/**
 * Move the "noButton" to a random position within the window boundaries.
 */
/**
 * Moves the button to a random position within the window boundaries.
 * @param {Event} event - The event object.
 */
function moveButton(event) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = noButton.clientWidth;
    const buttonHeight = noButton.clientHeight;

    const maxX = windowWidth - buttonWidth;
    const maxY = windowHeight - buttonHeight - 100;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Ensure the button stays within the window boundaries
    if (parseFloat(noButton.style.left) < 0) {
        noButton.style.left = "0px";
    }
    if (parseFloat(noButton.style.top) < 0) {
        noButton.style.top = "0px";
    }
}
/**
 * Redirects the user to the "celebration.html" page if the user click on "yes".
 */
function accept() {
    window.location.href = "celebration.html";
}

if (window.location.href.includes("celebration.html")) {
    fallingHearts(20);
}

/**
 * Creates falling hearts on the screen.
 * @param {number} count - The number of hearts to create.
 */
function fallingHearts(count) {
    if (count > 0) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);

        // Call the function recursively with reduced count
        fallingHearts(count - 1);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const targetDate = new Date('2025-02-14T00:00:00').getTime();
    /**
     * Updates the countdown timer based on the current date and target date.
     */
    function updateCountdown() {
      const currentDate = new Date().getTime();
      const timeLeft = targetDate - currentDate;
  
      if (timeLeft <= 0) {
        document.querySelector('.countdown').innerHTML = '<p>Time\'s up! It\'s Valentine Day 💖💖💖 </p>';
        return;
      }
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      document.getElementById('days').innerText = days;
      document.getElementById('hours').innerText = hours;
      document.getElementById('minutes').innerText = minutes;
      document.getElementById('seconds').innerText = seconds;
    }
  
    updateCountdown();
  
    setInterval(updateCountdown, 1000);
  });

// Dark mode 
// const app = document.getElementsByTagName("BODY")[0];

// function toggle_dark_light_mode() {
//   if (localStorage.lightMode == "dark") {
//     localStorage.lightMode = "light";
//     app.setAttribute("light-mode", "light");
//   } else {
//     localStorage.lightMode = "dark";
//     app.setAttribute("light-mode", "dark");
//   }
// }

// function updateLightMode() {
//   if (localStorage.lightMode === 'dark') {
//     app.setAttribute("light-mode", "dark");
//   } else {
//     app.setAttribute("light-mode", "light");
//   }
// }

// document.addEventListener('DOMContentLoaded', function () {
//   updateLightMode();

//   window.addEventListener(
//     "storage",
//     function () {
//       updateLightMode();
//     },
//     false
//   );

//   const lightModeButton = document.querySelector('.light-mode-button');
//   lightModeButton.addEventListener('click', toggle_dark_light_mode);
// });
