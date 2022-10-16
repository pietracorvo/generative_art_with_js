const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drawing = false;
ctx.lineWidth = 1;
// ctx.globalCompositeOperation = 'lighten';

class Root{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.speedX = Math.random() * 4 -2;
        this.speedY = Math.random() * 4 -2;
        this.maxSize = Math.random() * 7 + 5;
        this.size = Math.random() * 1 + 2;
        this.vs = Math.random() * 0.2 + 0.05;
        this.angleX = Math.random() * 6.2;
        this.vaX = Math.random() * 0.6 - 0.3;
        this.angleY = Math.random() * 6.2;
        this.vaY = Math.random() * 0.6 - 0.3;
        this.lighthness = 10;
    }
    update(){
        this.x += this.speedX + Math.sin(this.angleX);
        this.y += this.speedY + Math.sin(this.angleY);
        this.size += this.vs;
        this.angleX += this.vaX;
        this.angleY += this.vaY;
        if (this.lighthness < 70 ) this.lighthness += 0.25;
        if (this.size < this.maxSize){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'hsl(140,100%,' + this.lighthness + '%)';
            ctx.fill();
            ctx.stroke();
            requestAnimationFrame(this.update.bind(this));
        } else {
            const flower = new Flower(this.x, this.y, this.size);
            flower.grow();
        }
    }
}

class Flower{
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.maxFlowerSize = this.size + Math.random() * 50;
        this.image = new Image();
        this.image.src = 'img/flowers.png';
        this.frameSize = 100;
        this.frameY = Math.floor(Math.random() * 3);
        this.frameX = Math.floor(Math.random() * 3);
        this.size > 10 ? this.willFLower = true : this.willFLower = false;
        this.angle = 0;
        this.va = Math.random() * 0.05 - 0.025;
    }
    grow(){
        if (this.size < this.maxFlowerSize && this.willFLower){
            this.size += 0.3;
            this.angle += this.va;
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.drawImage(this.image,
                this.frameSize * this.frameX, this.frameSize * this.frameY,
                this.frameSize, this.frameSize,
                0 - this.size/2, 0 - this.size/2,
                this.size, this.size);
            ctx.restore();
            requestAnimationFrame(this.grow.bind(this));
        }
    }
}

window.addEventListener('mousemove', function(e){
    if (drawing){
        for (let i = 0; i<3; i++){
            const root = new Root(e.x, e.y);
            root.update();
        }    
    }
});
window.addEventListener('mousedown', function(e){
    drawing = true;
    for (let i = 0; i<30; i++){
        const root = new Root(e.x, e.y);
        root.update();
    }
});
window.addEventListener('mouseup', function(){
    drawing = false;
});
