Array.from(document.querySelectorAll(".selector")).map(function(btn){
    btn.addEventListener("click",function(event){
        var userName= document.querySelector("#name").value
        var winCount= 0
        var lossCount= 0
        var tieCount= 0
        fetch("http://codyhess.com:9001/" + event.target.dateset.base +"/"+ userName )
            .then(function(response){
                return response.json()
            })
            .then(function(conversion){
                if (username){
                    if(user.result=== "win"){
                        winCount+=1
                        document.querySelector("#twins").innertext=winCount
                    } else if(user.result==="loss"){
                        lossCount+=1
                        document.querySelector("#tlose").innertext=lossCount
                    } else{
                        tieCount+=1
                        document.querySelector("#ttie").innertext= tieCount
                    }
                }else {
                      
                    alert(result)
                
                } 

            })
    })
})