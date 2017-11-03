let form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    let userInput = document.querySelector("#response").value;
    var mashup = userInput.split("").reverse().join("")
    document.querySelector("#reversed").innerText = mashup
})
