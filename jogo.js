console.log('Richard Bastos - Flappy Bird');

const sprites = new Image();
sprites.src = './images/sprites.png'

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');


//CHAO/FLOOR

const floor = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112, //pega o tamanho total do canvas e subtrai 112 (altura do chao)
    desenha() {
        contexto.drawImage(
            sprites,
            floor.spriteX,
            floor.spriteY,
            floor.largura,
            floor.altura,
            floor.x,
            floor.y,
            floor.largura,
            floor.altura
        )
        contexto.drawImage(
            sprites,
            floor.spriteX,
            floor.spriteY,
            floor.largura,
            floor.altura,
            (floor.x + floor.largura),
            floor.y,
            floor.largura,
            floor.altura
        )
    }

}

//PLANO DE FUNDO / BACKGROUND

const planoDeFundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenha() {
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0, 0, canvas.width, canvas.height);

        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX,
            planoDeFundo.spriteY,
            planoDeFundo.largura,
            planoDeFundo.altura,
            planoDeFundo.x,
            planoDeFundo.y,
            planoDeFundo.largura,
            planoDeFundo.altura
        )
        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX,
            planoDeFundo.spriteY,
            planoDeFundo.largura,
            planoDeFundo.altura,
            (planoDeFundo.x + planoDeFundo.largura),
            planoDeFundo.y,
            planoDeFundo.largura,
            planoDeFundo.altura
        )
    }

}

//FLAPPY BIRD
const flappyBird = {
    //SpriteX SpriteY
    spriteX: 0,
    spriteY: 0,
    // Tamanho do recorte
    largura: 33,
    altura: 24,
    // Posicionamento no Canvas
    x: 10,
    y: 50,
    gravidade: 0.25,
    velocidade: 0,

    atualiza() {
        flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade;
        flappyBird.y += flappyBird.velocidade;
        console.log(flappyBird.velocidade)
    },

    desenha() {
        contexto.drawImage(
            sprites,
            flappyBird.spriteX,
            flappyBird.spriteY,
            flappyBird.largura,
            flappyBird.altura,
            flappyBird.x,
            flappyBird.y,
            flappyBird.largura,
            flappyBird.altura // Tamanho no canvas
        );
    }
}

function loop() {
    planoDeFundo.desenha();
    floor.desenha();
    flappyBird.atualiza();
    flappyBird.desenha();




    requestAnimationFrame(loop);

};

loop();