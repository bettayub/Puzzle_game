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
  
  
  
const startButton = document.getElementById('start-button');
const timerElement = document.getElementById('timer');
const movesElement = document.getElementById('moves');
const starRatingElement = document.getElementById('star-rating');


  
  