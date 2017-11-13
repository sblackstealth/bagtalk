document.querySelector("#sendToServer").addEventListener("click",function(event){
        event.preventdefault()
        var feed = document.querySelector("#feedback").value;
        var newLi = document.createElement("li");
        newLi.className = "firsty-item";
        newLi.appendChild(document.createTextNode(feed)); 
        document.querySelector("#first-list").appendChild(newLi)
        console.log(newLi)
        console.log(newLi)
})