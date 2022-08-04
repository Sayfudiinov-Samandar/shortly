var elStHEader = document.querySelector(".header-box") 
var elStBtn = document.querySelector(".bureger")

elStBtn.addEventListener('click', function(){
    elStHEader.classList.toggle("header-naw-open")
})