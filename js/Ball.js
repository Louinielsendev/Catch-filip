class Ball {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;

        const image = new Image();
        image.src = './img/fille.png';
        this.image = image
        this.width = 62;
        this.height = 62;
    }



    draw() {
        //c.fillStyle = 'green';
        //c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(this.image, this.position.x , this.position.y, this.width , this.height  );
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y


    }
}