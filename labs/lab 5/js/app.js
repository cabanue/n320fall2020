//grabs the div with the id yes and stores it in a variable
let items = document.getElementById("yes");

//does an in animation in which everything inside the div stored in the variable items 
//will fade into the page from the right side 
TweenLite.from(items, {duration: 1.4, x: 400, alpha: 0})

//grabs all the divs that are purple and stores them in an array 
let bodyDivs = document.getElementsByClassName("bodyDiv");

//loop to add event listeners to the purple divs for a few animations 
for (i=0; i < bodyDivs.length; i++){
    bodyDivs[i].addEventListener("mouseover", goBig);
    bodyDivs[i].addEventListener("mouseout", goSmall);
    bodyDivs[i].addEventListener("click", goAway);
}

function goBig(event){
    //when a div is hovered, it will play an animation in which the div enlarges 
    TweenLite.to(event.target, {duration:.6, scale: 1.25});
}

function goSmall(event){
    //when someone isn't hovering a div anymore, plays an animation in which the div returns
    //to it's original size
    TweenLite.to(event.target, {duration:.6, scale: 1})
}

function goAway(event){
    //when div is clicked on, it shrinks and fades away
    TweenLite.to(event.target, {duration: 1.4, scale:0, alpha:0})

    //removes the event listeners for mouse over and mouse out so that 
    //they don't interfere with the divs fading away 
    event.target.removeEventListener("mouseover", goBig)
    event.target.removeEventListener("mouseout", goSmall)
}
