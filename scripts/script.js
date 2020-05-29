let canvas = document.getElementById("snake");//se conectar com o elemento de ai snake na DOM
let context = canvas.getContext("2d");//passando o contexto da aplicação
let box = 32;//definindo o tamanho da caixa para 32px
let snake = [];//array responsavel por representar a cobrinha
snake[0] = {
    x: 7 * box,//seta posição da cobrinha no eixo x
    y: 7 * box//seta a posição da cobrinha no eixo y
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

function starGame(){//função que da inicio ao jogo
    criaBG();//chama a função responsavel por criar o backgound
    createSnake();//chama a função responsavel por criar a cobrinha

    let snakeX = snake[0].x;
    let snakey = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakey -= box;
    if(direction == "down") snakey += box;

}

let jogo = setInterval(starGame, 100);//velocidade dos frames do jogo

