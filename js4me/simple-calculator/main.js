const clear = document.querySelector(".clear"), 
    del = document.querySelector(".delete"),
    inc = document.querySelector(".inc"),
    divide = document.querySelector(".divide"),
    minus = document.querySelector(".minus"),
    plus = document.querySelector(".plus"),
    equally = document.querySelector(".equally")

const one = document.querySelector(".one"),
    two = document.querySelector(".two"),
    three = document.querySelector(".three"),
    four = document.querySelector(".four"),
    five = document.querySelector(".five"),
    six = document.querySelector(".six"),
    seven = document.querySelector(".seven"),
    eight = document.querySelector(".eight"),
    nine = document.querySelector(".nine"),
    noll = document.querySelector(".noll"),
    doubleNoll = document.querySelector(".double-noll"),
    dot = document.querySelector(".dot")

function createNumber(nameNumber = 0, number = 0) { 
        nameNumber.addEventListener("click", () => {
        input.textContent += number 
        filter()
    })
}

createNumber(one, 1)
createNumber(two, 2)
createNumber(three, 3)
createNumber(four, 4)
createNumber(five, 5)
createNumber(six, 6)
createNumber(seven, 7)
createNumber(eight, 8)
createNumber(nine, 9)
createNumber(noll, 0)
createNumber(doubleNoll, "00")
createNumber(dot, ".")

let input = document.querySelector(".input")

function createMove(moveName = "", move = "") { 
    moveName.addEventListener("click", ()=>{
        // if (input.textContent)
        let last = input.textContent.substr(input.textContent.length - 2)
        console.log(last)
        if (last == move || last.replace(/\d/, "") == move) {
            input.textContent = input.textContent.substring(0, input.textContent.length - 1)
        }
        
        input.textContent += move
        filter()
    }) 
}
createMove(plus, "+")
createMove(minus, "-")
createMove(divide, "/")
createMove(inc, "*")

clear.addEventListener("click", ()=>{
    input.textContent = ""
}) 

del.addEventListener("click", ()=>{
    input.textContent = input.textContent.substring(0, input.textContent.length - 1)
})

equally.addEventListener('click', ()=>{
    try {
        input.textContent = eval(input.textContent.trim())
    }
    catch {
        input.textContent = "error"
    }
})

function filter() { 
    input.textContent = input.textContent.trim()
    if (input.textContent.length >= 21) {
        input.textContent = input.textContent.substring(0, input.textContent.length - 2)
    }
}
window.addEventListener("keypress", (e) => {
    // console.log(e.keyCode)
    if (e.keyCode == 49) {
        createNumber(one, "1")
    }
})
