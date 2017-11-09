window.addEventListener("click", function(){

    var list= document.querySelector("#first-list");
    var xTrack= Event.screenX;
    var yTrack= Event.screenY;
    var newItem= document.createElement("LI");
    var whatsInItem= newItem.innerHTML= "x: " + xTrack + " y:" + yTrack;
    list.appendChild(newItem)
    console.log(xTrack)
    console.log(yTrack)
    console.log(newItem)

})
document.getElementById("#clear").addEventListener("click",function(){
    list.innerText= ""



})