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
        const co
    }
}

    });
});