//Firework rocket

class Firework {
    constructor(x, y, width, height, deltaY) {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 75;
        this.deltaY = 25;
        this.colorOne = color(225, 244, 14);
        this.colorTwo = color(random(255), random(255), random(255));
        this.currentColor = this.colorOne;
    }

    display() {
        fill(this.currentColor);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
        fill("red");
        triangle(this.x - 5, this.y, this.x + (this.width / 2), this.y - (this.height / 2), (this.x + 5) + this.width, this.y);
        noFill();
        stroke("white");
        strokeWeight(4);
        arc(this.x, this.y + this.height, 25, 35, 0, 2);
    }

    fly() {
        this.y -= this.deltaY;
    }

    checkWithin(x, y) {
        if (x > this.x && y > this.y && x < this.width + this.x && y < this.height + this.y) {
            return true;
        } else {
            return false;
        }
    }

    changeClr() {
        this.currentColor = this.colorTwo;
    }
}

//Spark

class Spark {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(10, 15);
        this.pulseRate = random(5, 20);
        this.deltaY = 25;
        this.fillColor = color(242,
            random(62, 238),
            38, 150);
    }

    pulse() {

        let s = this.size / 2 + sin(frameCount / this.pulseRate) * this.size;
        fill(this.fillColor);
        ellipse(this.x, this.y, this.size + s, this.size + s);

    }

    fly() {
        this.y -= this.deltaY;
    }


}

//Explosions

class Explosions {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(10, 20);
        this.deltaX = random(-8, 8);
        this.deltaY = random(-8, 8);
        this.opac = 500;
        this.changingAlp = -7;
    }

    display() {
        stroke(255, 255, 255, this.opac);
        strokeWeight(1);
        fill(color(random(255), random(255), random(255), this.opac));
        ellipse(this.x, this.y, this.size, this.size);
    }

    move() {
        this.x += this.deltaX;
        this.y += this.deltaY;
        //Changes the opacity
        this.opac += this.changingAlp;
    }


}
