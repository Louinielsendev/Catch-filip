class Background {
    constructor(){
        this.position = {
            x: 0,
            y: 0
        }
        this.width = canvas.width;
        this.height = canvas.height;
        const image = new Image();
        image.src = './img/background.jpg';
        this.image = image;

    }

    draw() {
        c.drawImage(this.image, this.position.x , this.position.y , this.width, this.height);

    }

}