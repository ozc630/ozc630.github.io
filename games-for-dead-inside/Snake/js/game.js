const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png"; // 32px (зависит от квадрата внутри фона)

const pod = new Image();
pod.src = "img/pod.png";


const zakat = new Audio();
zakat.src = "audio/zakat-orig.mp3";

let box = 32; // (ширину квдарат)

let score = 1000;

let food = {
    x: Math.floor((Math.random() * 17 + 1)) * box, // 17 - макс длина всех кубов по иксу (дефолт от 0 до 16)
    y: Math.floor((Math.random() * 15 + 3)) * box,
};

// положение дефолт положения змейки

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box,
};

let dir;

let reset;


document.addEventListener("keydown", direction);

function direction(event) { 
    if (event.keyCode == 37 && dir != "right")
        dir = "left"; 
    else if (event.keyCode == 38 && dir != "down")
        dir = "up";
    else if (event.keyCode == 39 && dir != "left")
        dir = "right";
    else if (event.keyCode == 40 && dir != "up")
        dir = "down";
        zakat.play()
}

function eatTail(head, arr) {
    for(let i = 0; i < arr.length; i++) {
        if(head.x == arr[i].x && head.y == arr[i].y)
            clearInterval(game);
            // document.querySelector(".modal").classList.add("modal--visible");
           
    }
}


function drawGame() { 
    ctx.drawImage(ground, 0, 0);
    ctx.drawImage(foodImg, food.x, food.y); 

    // отрисовка змеии
    for(let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i == 0 ? "white" : "red"; // проверяем, если первый элемент, то он зеленый, остльыне красные
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.drawImage(pod, snake[i].x, snake[i].y); 
    };

    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText (score, box * 2.5, box * 1.65);

    let snakeX = snake[0].x;
	let snakeY = snake[0].y;

    if(snakeX == food.x && snakeY == food.y) {
        
        score -=7;

        food = {
        x: Math.floor((Math.random() * 17 + 1)) * box, // 17 - макс длина всех кубов по иксу (дефолт от 0 до 16)
        y: Math.floor((Math.random() * 15 + 3)) * box,
        };      
    } else {
        snake.pop(); // pop() удаляет послдений элмент в массиве
    }

    if(snakeX < box || snakeX > box * 17
        || snakeY < 3 * box || snakeY > box * 17)
        clearInterval(game);
        // document.querySelector(".modal").classList.add("modal--visible");

    if(dir == "left") snakeX -= box;
    if(dir == "right") snakeX += box;
    if(dir == "up") snakeY -= box;
    if(dir == "down") snakeY += box;
    

    let newHead = {
        x: snakeX,
        y: snakeY,
    };

    eatTail(newHead, snake);

    snake.unshift(newHead);
};


let game = setInterval(drawGame, 100) // вызыв рисования какждые 100 мс
