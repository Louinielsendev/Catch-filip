const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const startButton = document.querySelector('button');
startButton.addEventListener('click', startGame)
const backgroundImg = document.querySelector('.backgroundImg');
const gameover =  document.querySelector('.gameover')
const score = document.querySelector('.score');
const lifes = document.querySelector('.lifes');

var balls = [];
var games = [];
var intervalId;

canvas.width = 585;
canvas.height = 587;

c.fillRect(0, 0, canvas.width, canvas.height);


const box = new Box({
    position: {
        x: 220,
        y: 500
    },
    velocity: {
        x: 0
    }
});

const background = new Background();


function startGame() {
    for (var i = 0; i < 3; i++){
        var life = document.createElement('img');
        life.src = 'img/life.png';
        lifes.appendChild(life)
    }

    box.position.x = 220

    score.innerHTML = '0';
    
    backgroundImg.style.display = 'none';
    var game = new Game();
    games.push(game);
    animate()
    gameover.style.display = 'none';
    startButton.style.display = 'none';
    intervalId = window.setInterval(function () {
        generateBalls();
    }, games[0].level);
}

function generateBalls() {
    var positionX = Math.random() * 470 + 20
    var velocityY = Math.random() * 1.5 + 1;
    var ball = new Ball({
        position: {
            x: positionX,
            y: 0
        },
        velocity: {
            y: velocityY
        }
    })
    balls.push(ball)
}

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }
}


function animate() {
    var animation = window.requestAnimationFrame(animate)
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.draw();
    box.update();


    box.velocity.x = 0;
    if (keys.a.pressed && box.lastKey === 'a' && box.position.x > 0) {
        box.velocity.x = -12
    }
    else if (keys.d.pressed && box.lastKey === 'd' && box.position.x < canvas.width - 200) {
        box.velocity.x = 12
    }

    balls.forEach((ball, i) => {
        ball.update();
        if (ball.position.y > box.position.y - ball.height && ball.position.x + ball.width > box.position.x && ball.position.x < box.position.x + 200) {
            if (!(ball.position.y > box.position.y - 30 && ball.position.x + ball.width > box.position.x)) {
                setTimeout(() => {
                    balls.splice(i, 1)
                }, 0)
                games[0].score += 10;
                setScore()
                if (games[0].score == 100 || games[0].score == 250 || games[0].score == 500 || games[0].score == 750 || games[0].score == 1000){
                    changeLevel();
                }
            }
        }

        if (ball.position.y > canvas.height) {
            setTimeout(() => {
                balls.splice(i, 1)
            }, 0)
            checkLifes(animation);
        }
    });
}

function setScore(){
    score.innerHTML = games[0].score;
}

function changeLevel(){
    games[0].level -= 200;
    clearInterval(intervalId);
    intervalId = window.setInterval(function () {
        generateBalls();
    }, games[0].level);
}

function checkLifes(animation) {
    games[0].lifes--;
    lifes.lastChild.remove()

    if (games[0].lifes == 0) {
        window.cancelAnimationFrame(animation)
        gameOver();
    }
}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true;
            box.lastKey = 'd';
            break;
        case 'a':
            keys.a.pressed = true;
            box.lastKey = 'a'
            break;
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
    }
})

function gameOver() {
    clearInterval(intervalId);
    balls = [];   
    games = [];
    
    gameover.style.display = 'inline';
    startButton.style.display = 'inline';
    startButton.innerHTML = 'Play again'
    
}