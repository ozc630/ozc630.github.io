let btns = document.querySelectorAll(".btn")
let all = document.querySelectorAll(".all")

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {

        let filter = this.dataset.filter // data-fileter = (значение)

        console.log(filter)
        if (filter == 'all') {
            for (let a = 0; a < all.length; a++) { 
                all[a].style.display = 'block'
            }
        }

        else if (filter == 'red') {
            for (let a = 0; a < all.length; a++) { 
                all[a].style.display = 'none'
                let red = document.querySelectorAll(".red")
                    for (let i = 0; i < red.length; i++) {
                        red[i].style.display = 'block'
                    }
            }
        }

        else if (filter == 'green') {
            for (let a = 0; a < all.length; a++) { 
                all[a].style.display = 'none'
                let green = document.querySelectorAll(".green")
                    for (let i = 0; i < green.length; i++) {
                        green[i].style.display = 'block'
                    }
            }
        }

        else if (filter == 'blue') {
            for (let a = 0; a < all.length; a++) { 
                all[a].style.display = 'none'
                let blue = document.querySelectorAll(".blue")
                    for (let i = 0; i < blue.length; i++) {
                        blue[i].style.display = 'block'
                    }
            }
        }       
    }
}