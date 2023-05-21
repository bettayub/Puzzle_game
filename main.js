let counter = 0;
let firstSelection = "";
let secondSelection = "";

const cards = document.querySelectorAll(".cards .icon");
cards.forEach((icon) =>{
    icon.addEventListener("click", () =>
    {
        icon.classList.add("clicked")
        if (counter === 0){
firstSelection = icon.getAttribute("pic");
counter++;
}else {
    secondSelection = icon.getAttribute("pic");
    counter = 0;

    if(firstSelection===secondSelection){
        const correctCards = document.querySelectorAll(
            ".icon[pic='" + firstSelection + "']"  );
            correctCards[0].classList.add("checked");
            correctCards[0].classList.remove("clicked");
            correctCards[1].classList.add("checked");
            correctCards[1].classList.remove("clicked");
         }else {
            const incorrectCards = document.querySelectorAll(".icon.clicked");

            incorrectCards[0].classList.add("shake");
            incorrectCards[1].classList.add("shake");

            setTimeout(() => {
                incorrectCards[0].classlist.remove("shake");
                incorrectCards[0].classlist.remove("clicked");
                incorrectCards[1].classlist.remove("shake");
                incorrectCards[1].classlist.remove("clicked");

            },800);
         }
           
         
}

    });
});