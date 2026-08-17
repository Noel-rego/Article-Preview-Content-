const invisibleButtons = document.querySelector(".invisibleButtons");
const button = document.querySelector(".share-btn");
const endBody=document.querySelector(".endBody");

let clickCount = 0;

button.addEventListener("click",() => {
    let screenWidth = window.innerWidth; 
    if (screenWidth<=768){
        endBody.classList.toggle("active");
        console.log("device is in moblile view,button was clicked.") ;
    }
    else{
        clickCount++;
        if(clickCount===1){
            invisibleButtons.style.display = "flex";
        }
        else if(clickCount===2){
            invisibleButtons.style.display="none";
            clickCount=0;
        }
    }
 });

