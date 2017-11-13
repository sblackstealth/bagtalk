document.querySelector("frombin").addEventListener("click",function(event){
    var num = document.querySelector("#num").value
    fetch("http://codyhess.com:9000/"++").then(function(response){
        return response.json()
    })
    .then(function(conversion){
        document.querySelector("#original-num").innerText= number
        document.querySelector("#asbin").innerText= "decimal"
        
        document.querySelector("#asbin").innerText= conversion.binary
        document.querySelector("#asHex").innerText= conversion.hex
        document.querySelector("#asDec").innerText= conversion.decimal
    })
})