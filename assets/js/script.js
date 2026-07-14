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

/**
 * Creates falling hearts across the full viewport width.
 * @param {number} count - The number of hearts to create.
 */
function fallingHearts(count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        // Keep hearts on-screen (100px wide) across the full viewport
        heart.style.left = Math.random() * 90 + "%";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heart.style.animationDelay = Math.random() * 2 + "s";
        document.body.appendChild(heart);
    }
}

if (window.location.pathname.includes("celebration.html")) {
    document.addEventListener("DOMContentLoaded", function () {
        fallingHearts(20);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const countdown = document.querySelector('.countdown');
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    // Countdown only exists on the celebration page
    if (!countdown || !daysEl || !hoursEl || !minutesEl || !secondsEl) {
        return;
    }

    /**
     * Next Valentine's Day (Feb 14). If today is past Feb 14, use next year.
     */
    function getNextValentineDate() {
        const now = new Date();
        let year = now.getFullYear();
        const valentineThisYear = new Date(year, 1, 14); // month is 0-indexed

        if (now >= valentineThisYear) {
            year += 1;
        }

        return new Date(year, 1, 14).getTime();
    }

    /**
     * Updates the countdown timer based on the current date and next Valentine's Day.
     */
    function updateCountdown() {
      const targetDate = getNextValentineDate();
      const currentDate = new Date().getTime();
      const timeLeft = targetDate - currentDate;
  
      if (timeLeft <= 0) {
        countdown.innerHTML = '<p>Time\'s up! It\'s Valentine Day 💖💖💖 </p>';
        return;
      }
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      daysEl.innerText = days;
      hoursEl.innerText = hours;
      minutesEl.innerText = minutes;
      secondsEl.innerText = seconds;
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
