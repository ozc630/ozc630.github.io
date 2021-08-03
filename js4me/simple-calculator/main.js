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

// <div class="app">

//         <div class="calculator">
//             <div class="contaniner">
//                 <!-- tab -->
//                 <div class="tab">
//                     <div class="tab-display">
        
//                         <div class="input">
//                             <!-- 2678*20 22222222222222222222 -->
//                         </div>
//                     </div>
        
//                 </div>
        
//                 <!-- numbers & symbols -->
        
//                 <!-- 1st -->
//                 <div class="one-str">
//                     <button class="one_str clear">ac</button>
//                     <button class="one_str delete">del</button>
//                     <button class="one_str inc">*</button>
//                     <button class="one_str divide">&divide;</button>
//                 </div>
        
//                 <!-- 2st -->
//                 <div class="two-str">
//                     <button class="two_str seven">7</button>
//                     <button class="two_str eight">8</button>
//                     <button class="two_str nine">9</button>
//                     <button class="two_str minus">-</button>
//                 </div>
        
//                 <!-- 3st -->
//                 <div class="two-str">
//                     <button class="two_str four">4</button>
//                     <button class="two_str five">5</button>
//                     <button class="two_str six">6</button>
//                     <button class="two_str plus">+</button>
//                 </div>
        
//                 <!-- 4 + 5 -->
//                 <div class="four-five">
//                     <div class="four-five-str">
//                         <!-- 4 -->
//                         <div class="four-str">
//                             <button class="two_str one">1</button>
//                             <button class="two_str two">2</button>
//                             <button class="two_str three">3</button>
//                         </div>
//                         <!-- 65 -->
//                         <div class="five-str">
//                             <button class="two_str noll">0</button>
//                             <button class="two_str double-noll">00</button>
//                             <button class="two_str dot">.</button>
//                         </div>
//                     </div>
        
//                     <!-- = -->
//                     <button class="equally"> = </button>
//                 </div>
//             </div>
//         </div>


//     </div>