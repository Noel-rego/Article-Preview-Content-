const invisibleButtons = document.querySelector(".invisibleButtons");
const button = document.querySelector("button");

let clickCount = 0;

button.addEventListener("click", () => {
    clickCount++; 

    if (clickCount === 1) {
        invisibleButtons.style.display = "flex";
    } else if (clickCount === 2) {
        invisibleButtons.style.display = "none";
        clickCount = 0; 
    }
});
