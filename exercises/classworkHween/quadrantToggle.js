document.addEventListner("click",function(event){
    var t = event.target.style
    t.backroundColor = t.backroundColor === "gold" ? "white": "gold"
});