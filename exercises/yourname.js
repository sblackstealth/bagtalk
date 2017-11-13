window.addEventListener("click", function(event){

    var list= document.querySelector("#first-list");
    if (event.target.id==="clear"){
        var list= document.querySelector("#first-list").innerHTML= ""
        event.stopPropagation
    }
    var xTrack= event.clientX;
    var yTrack= event.clientY;
    var newItem= document.createElement("LI");
    var whatsInItem= newItem.innerHTML= "x: " + xTrack + " y:" + yTrack;
    list.appendChild(newItem)
    console.log(xTrack)
    console.log(yTrack)
    console.log(newItem)

})
