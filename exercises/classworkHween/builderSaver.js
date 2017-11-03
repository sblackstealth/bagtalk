var  blurbkey = "allTheBlurb"
var appendBlurb= document.querySelector("#appendBlurb");
appendBlurb.addEventListener("click", function(event){
    var input = document.querySelector("#blurb");
    var allTheBlurb = document.querySelector("#alltheBlurb")
    allTheBlurb.innerHTML +=" " + input.value;
    window.localStorage.setItem(blurbkey, allTheBlurb.innerHTML);
    input.value="";
})
var allTheBlurb = document.querySelector("#alltheBlurb");
allTheBlurb.innerHTML = window.localStorage.getItem(blurbkey)