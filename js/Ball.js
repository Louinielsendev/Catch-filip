class Ball {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;

        const image = new Image();
        image.src = './img/fille.png';
        this.image = image
        this.width = 80;
        this.height = 80;
    }



    draw() {
        //c.fillStyle = 'green';
        //c.fillRect(this.position.x, this.position.y, 70, 70)
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y


    }
}