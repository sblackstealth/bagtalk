const info= document.querySelector("#but1")
const paragraph = document.querySelector("#myp")
console.log(info)
function reqListner(){
    info.addEventListener("click",function (){
      let newReq=  new XMLHttpRequest();
      newReq.addEventListener("load", function(){
        console.log(this.responseText)
       let parsed= JSON.parse(this.responseText)
       let setup = parsed.setup
       let punchline = parsed.punchline
       paragraph.innerText =`setup: ${setup} punchline: ${punchline})`
        
      })
      newReq.open ('GET',"https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke")
      newReq.send()
    })
       
    
}
reqListner()