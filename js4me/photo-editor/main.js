let img = document.querySelector(".img")
let contrast = document.querySelector('#contrast')
let sepia = document.querySelector('#sepia')

contrast.oninput = edit;
sepia.oninput = edit;

function edit() {
    // console.log(sepia.value)
    img.style.filter = 'contrast' + "(" + (contrast.value/10) + ")" + 'sepia' + "(" + (sepia.value /100) + ")" 
    // console.log(img.style.filter)
}

let resetButton = document.querySelector('#reset')
resetButton.addEventListener("click", resetFilter) 
function resetFilter() { 
    // console.log(2)
    contrast.value = 10
    sepia.value = 0
    img.style.filter = 'contrast' + "(" + (contrast.value/10) + ")" + 'sepia' + "(" + (sepia.value/100) + ")" 
    console.log(img.style.filter)
 }

// загрузка новой фоторграфии (делал не сам)

let loadFile = document.querySelector('#loadFile')

loadFile.onchange = function (event) {
  let selectedFile = event.target.files[0];
  let reader = new FileReader();

  let imgtag = document.querySelector(".img")
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}