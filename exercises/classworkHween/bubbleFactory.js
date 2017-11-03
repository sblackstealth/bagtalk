
document.addEventListener("DOMContentLoaded", function(event) {
    let button = document.querySelector("button");

    button.addEventListener("click", function(event) {
        let bubble = document.createElement("img");
        bubble.src = "http://www.bubblenova.com/assets/images/game/bubbles.png";
        bubble.style.height = Math.floor(Math.random() * 50 + 10 ).toString() + px";
        bubble.style.top = Math.floor(Math.random() * 95 + 5 ).toString() + "%";
        bubble.style.left = Math.floor(Math.random() * 99 ).toString() + "%";
        bubble.style.position = "fixed";

        document.body.appendChild(bubble);
    })
})