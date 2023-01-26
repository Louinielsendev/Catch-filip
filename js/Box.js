class Box {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity
        this.lastKey

        const image = new Image();
        image.src = './img/basket.png';
        this.image = image
        this.width = 200;
        this.height = 167.5;
    }



    draw() {
      //c.fillStyle = 'red';
      //c.fillRect(this.position.x, this.position.y, 200, 167.5);
      c.drawImage(this.image, this.position.x - 25, this.position.y -110, this.width + 50, this.height + 30);
        
    }

    update() {
        this.draw()

        this.position.x += this.velocity.x


    }
}
