function swapItem(){
    
    var firstEle= window.prompt("what is the fist element to grab")
    var secondEle = window.prompt("what is the next element to grab")
    document.getElementById(firstEle).innerText= document.getElementById(secondEle).innerText
}