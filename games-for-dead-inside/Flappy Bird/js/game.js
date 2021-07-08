var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

// звуки

var fly = new Audio();
var score_audio = new Audio();
var bg_mus = new Audio();
var zakat = new Audio();
var screamers = new Audio();
var ghoul1 = new Audio();

fly.src = "audio/fly.mp3"
score_audio.src = "audio/score.mp3"
bg_mus.src = "audio/bg-music.mp3"
zakat.src = "audio/zakat.mp3"
screamers.src ="audio/screamer.mp3"
ghoul1.src ="audio/ghoul.mp3"

bird.src = "img/flappy_bird_bird.png";
bg.src = "img/flappy_bird_bg.png";
fg.src = "img/flappy_bird_fg.png";
pipeUp.src = "img/flappy_bird_pipeUp.png";
pipeBottom.src = "img/flappy_bird_pipeBottom.png";

// расстояние между колоннами

var gap = 90;

// счет

var score = 0;

// при нажатии на какую-либо кнопку

document.addEventListener("keydown", moveUp); // при нажатии на keydown, вызывается функция mobeUp, которая будет поднимать птичку на +20

    var fireRate = 20,
    fireInterval = null;

    function moveUp() {
        yPos -= 25;
    }
    function startFire() {
        moveUp();
        fireInterval = setInterval(moveUp, 1000/fireRate );
    }

    function stopFire() {
        clearInterval(fireInterval);
    }

    document.addEventListener("mousedown", startFire);
    document.addEventListener("mouseup", stopFire); 


// создание блоков

var pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0
};

// позиция питичк

var xPos = 10;
var yPos = 150;

var grav = 2.5; // на скол пикс будет падать питичкаW


function draw() {

    ctx.drawImage(bg, 0, 0); //bg 

    for (var i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y); // pipeUp
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap); // pipeBottom , gap - отступ ;

        pipe[i].x-- //передвижение блоков (отнимается позиция по х--)
        if (pipe[i].x == 125) { //если pipe находится на координате 125px, то создается новый pipe
            pipe.push({
                x: cvs.width,
                // floor - округление до целых
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height // генерация случайного появления позиционироянваия расстояния по y
            });
        }

        if (pipe[i].x == 5) {
            score++;
            score_audio.play(); // приогрыание аудио при добалвении нового очка счета

            if(score == 20) { //42
            document.querySelector(".modal").classList.add("modal--visible")
            // yPos = 0 ;
            i = -100000000
            bg_mus.pause();
            }
        }

        if (xPos + bird.width >= pipe[i].x
            && xPos <= pipe[i].x + pipeUp.width
            && (yPos <= pipe[i].y + pipeUp.height

                || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)
            || yPos + bird.height >= cvs.height - fg.height) {
            // location.reload(); // перезаугрзка страницы
            document.querySelector(".reset").classList.add("reset--visible")
            i = -100000000
            // window.location.href = 'flappy-bird.html '; //тоже перезаугрзка , но в " " можно указать путь к файлу

            // при нажатии на любую кнопку кавиаутруы нажмется вспывающая кнопка

            // document.addEventListener('keydown', function buttonReset(e) {
            // document.getElementById('button-reset').click();
            // });

            document.addEventListener('keydown', buttonReset);
               
            function buttonReset(e) {
            document.getElementById('button-reset').click();
            };
            bg_mus.pause();
            
            // let timerId = buttonReset(2000); // timer, вызвает функцию срауз после времени
        }   
        
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height); //fg 
    ctx.drawImage(bird, xPos, yPos); // можно указать ширину и высоту картинки

    yPos += grav;

    // стили для score
    ctx.fillStyle = "#eee";
    ctx.font = "20px Verdana";
    ctx.fillText("Score: " + score, 10, cvs.height - 20);

    requestAnimationFrame(draw); // анимация пaдания птички на -1 
    bg_mus.play();

    // я гуль

    
};

function playZakatRemixOn() {
    zakat.play();
}
function playZakatRemixOff() {
    zakat.pause();
}

function ghoul() { 
    ghoul1.play()
}

function screamer() { 
    document.querySelector(".screambg").classList.add("screambg--visible")

    document.querySelector(".screamer").classList.add("screamer--visible")

    document.querySelector(".exit-button").classList.add("exit-button--visible")

    screamers.play();
    ghoul1.pause()
};



pipeBottom.onload = draw; // если послдення картинка заугрзилась, тогда происходит отрисовка изображений

