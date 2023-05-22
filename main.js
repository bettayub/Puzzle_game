let counter = 0;
let firstSelection = "";
let secondSelection = "";

const cards = document.querySelectorAll(".cards .icon");
cards.forEach((icon) => {
    icon.addEventListener("click", () => {
        icon.classList.add("clicked");
        if (counter === 0) {
            firstSelection = icon.getAttribute("pic");
            counter++;
        } else {
            secondSelection = icon.getAttribute("pic");
            counter = 0;

            if (firstSelection === secondSelection) {
                const correctCards = document.querySelectorAll(".icon[pic='" + firstSelection + "']");
                correctCards[0].classList.add("checked");
                correctCards[0].classList.remove("clicked");
                correctCards[1].classList.add("checked");
                correctCards[1].classList.remove("clicked");
            } else {
                const incorrectCards = document.querySelectorAll(".icon.clicked");

                incorrectCards[0].classList.add("shake");
                incorrectCards[1].classList.add("shake");

                setTimeout(() => {
                    incorrectCards.forEach((card) => {
                        card.classList.remove("shake");
                        card.classList.remove("clicked");
                    });
                }, 800);

                // 
                setTimeout(() => {
                    incorrectCards.forEach((card) => {
                        card.classList.remove("checked");
                    });
                }, 1500);
            }
        }
    });
});
(function shuffle() {
    cards.forEach(icon => {
      let randomPos = Math.floor(Math.random() * 12);
      icon.style.order = randomPos;
    });
  })();
const timerElement = document.getElementById('timer');
const movesElement = document.getElementById('moves');
const starRatingElement = document.getElementById('star-rating');

let movesCount = 0;
let starRating = 5;
let timerInterval;
let minutes = 0;
let seconds = 0;

const startButton = document.getElementById('start-button');
function startGame() {
  movesCount = 0;
  starRating = 5;
  minutes = 0;
  seconds = 0;

  // Reset elements
  movesElement.textContent = `Moves: ${movesCount}`;
  starRatingElement.textContent = `Star Rating: ${starRating}`;
  updateTimer();

  // Start the timer
  timerInterval = setInterval(updateTimer, 1000);

  // Add event listeners to the cards
  const cards = document.querySelectorAll('.icon');
  cards.forEach((card) => {
    card.addEventListener('click', cardClickHandler);
  });

  // Hide start button
  startButton.style.display = 'none';
}

// Function to handle card click
function cardClickHandler() {
  // Handle the logic for card click here
  // ...
  
  // Increment moves count
  movesCount++;
  movesElement.textContent = `Moves: ${movesCount}`;

  // Update star rating based on moves count
  if (movesCount > 10) {
    starRating = 4;
  } else if (movesCount > 15) {
    starRating = 3;
  } else if (movesCount > 20) {
    starRating = 2;
  } else if (movesCount > 25) {
    starRating = 1;
  }
  starRatingElement.textContent = `Star Rating: ${starRating}`;
}

// Function to update the timer
function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Event listener for the start button
startButton.addEventListener('click', startGame);