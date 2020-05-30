let canvas = document.getElementById("snake");//se conectar com o elemento de ai snake na DOM
let context = canvas.getContext("2d");//passando o contexto da aplicação
let box = 32;//definindo o tamanho da caixa para 32px
let snake = [];//array responsavel por representar a cobrinha
snake[0] = {
    x: 7 * box,//seta posição da cobrinha no eixo x
    y: 7 * box//seta a posição da cobrinha no eixo y
}

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

let direction = "right";

function criaBG(){//função responsavel por reenderizar o background
    context.fillStyle = "lightgreen";//definindo a cor do background
    context.fillRect(0, 0, 16 * box, 16 * box );//definindo o tamanho do background
   
}

function createSnake(){//função responsavel por criar a cobrinha
    for(i=0; i < snake.length; i++){//controla o tamanho da cobrinha
        context.fillStyle = "green";//definindo a cor da cobrinha
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

document.addEventListener('keydown', update);

function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";

}

function checkHeadPosition(){
    if(snake[0].x > 15 * box && direction != "left") snake[0].x = 0;
    if(snake[0].x < 0 && direction != "right") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction != "up") snake[0].y = 0;
    if(snake[0].y < 0 && direction != "down") snake[0].y = 16 * box;


}

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

function starGame(){//função que da inicio ao jogo

    checkHeadPosition();
    criaBG();//chama a função responsavel por criar o backgound
    createSnake();//chama a função responsavel por criar a cobrinha
    drawFood();

    let snakeX = snake[0].x;
    let snakey = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakey -= box;
    if(direction == "down") snakey += box;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("GAME OVER");
        }
    }

    if(snakeX != food.x || snakey != food.y){
        snake.pop();//retira o ultimo elemento do array
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    
    let newHead = {//seta a cabeça da cobrinha
        x: snakeX,
        y: snakey
    }
    

    snake.unshift(newHead);//insere no começo do array

}

let jogo = setInterval(starGame, 100);//velocidade dos frames do jogo

