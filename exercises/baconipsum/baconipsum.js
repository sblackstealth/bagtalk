function reqListener () {
 var joke = (this.responseText)
  console.log(joke)

}

document.addEventListener('load', function() {
      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", reqListener);
      oReq.open("GET", "https://baconipsum.com/api/?type=meat-and-filler&sentences=5&format=text");
      oReq.send();

})
