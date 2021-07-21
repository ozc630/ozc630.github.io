setInterval (nextSlide, 5000) 

document.querySelector(".next").addEventListener("click", nextSlide)
document.querySelector(".prev").addEventListener("click", prevSlide)

let slideLength = (document.querySelectorAll(".slide").length - 2)
let slideWidth = document.querySelector(".slide").clientWidth + 20 // 150 + 20
console.log(slideWidth)

let slide = document.querySelector(".slider-container")
let xPos= 0

function nextSlide() {
    xPos += slideWidth
    if (xPos > (slideWidth*slideLength)) {
        xPos = 0
    }
    slide.style.left = -xPos + "px"
}

function prevSlide() {
    xPos -= slideWidth
    if (xPos < 0) {
        xPos = (slideWidth*slideLength)
    }
    slide.style.left = -xPos + "px"
}

window.onkeydown = function(e) {
    if (e.keyCode == 37) {
        prevSlide()
    }
    else if (e.keyCode == 39) {
        nextSlide()
    }
}


