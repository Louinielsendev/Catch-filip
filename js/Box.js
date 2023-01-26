class Box {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity
        this.lastKey

        const image = new Image();
        image.src = './img/basket.png';
        this.image = image
        this.width = 300;
        this.height = 250;
    }



    draw() {
       //c.fillStyle = 'red';
       // c.fillRect(this.position.x, this.position.y, 200, 100);
        c.drawImage(this.image, this.position.x - 50, this.position.y -135, this.width, this.height);
        
    }

    update() {
        this.draw()

        this.position.x += this.velocity.x


    }
}
