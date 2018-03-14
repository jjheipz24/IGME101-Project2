/*
Jin Jin Heipler 
11/5/17
IGME-101: Project 2 Interaction
*/

// I have attached the "libraries" folder because it contains the script for the audio in my program

"use strict"

var rocket;
let sparks;;
let fireworks = [];
var myT;
var firework;
var mySound;

function preload() {
    soundFormats('mp3');
    mySound = loadSound("sound/fireworkblast.mp3");
}


function setup() {
    createCanvas(700, 700);
    turtleSetup();
    initial();


}

function draw() {
    background(color(3, 8, 61));

    //instructions
    stroke(0);
    textAlign(LEFT);
    fill(255, 255, 255);
    textSize(18);
    text("Click the firework to change the color", 10, height - 140, width / 1.5);
    textSize(20);
    text("Press 'L' to light the firework", 10, height - 100, width / 2);
    text("Hold 'UP' arrow to launch", 10, height - 60, width / 2);
    text("Press 'R' to reset", 10, height - 20, width / 2);

    textSize(15);
    text("*Plays sound*", 10, 20, width / 2);

    //displays firework
    rocket.display();

    //Creates the pulsing effect on the spark
    for (let i = 0; i < sparks.length; i++) {
        noStroke();
        sparks[i].pulse();
        //makes the spark move with the firework
        if (keyIsDown(UP_ARROW)) {
            sparks[i].fly();
        }
        if (sparks[i].y <= 225) {
            sparks[i].y = -100;
        }
    }


    //makes the firework fly
    if (keyIsDown(UP_ARROW)) {
        rocket.fly();
    }

    //makes firework "disappear" 
    if (rocket.y <= 150) {
        rocket.y = 10000;

        //The explosive sound will play when the firework disappears/"explodes"
        mySound.setVolume(.5);
        mySound.play();
        mySound.stop(2);

        //the ring of particles from the firework explosion
        myT.ring(9, 40, 40);
        myT.move(random(width), random(height));
        myT.ring(9, 40, 40);
    }
    //displays the firework explosions and makes them move
    for (var i = 0; i < fireworks.length; i++) {
        fireworks[i].display();
        fireworks[i].move();

    }


}

function turtleSetup() {
    Turtle.prototype.ring = ring;
    Turtle.prototype.move = move;

}

function keyTyped() {

    //Lights the firework and creates the spark
    if (key === "l") {
        sparks[0] = new Spark((width / 2) - 22, (height - 10));
        sparks[1] = new Spark((width / 2) - 22, (height - 10));
        sparks[2] = new Spark((width / 2) - 22, (height - 10));

    }

    //Allows user to reset the program
    if (key === 'r') {
        initial();
    }

}

//Changes the color of the firework to a random color when it is clicked (one time)
function mouseClicked() {
    if (rocket.checkWithin(mouseX, mouseY) == true) {
        rocket.changeClr();
    }
}

//Creates the ring of particles in explosion
function ring(reps, ang, spacing) {
    for (var i = 0; i < reps; i++) {
        myT.penUp();
        myT.forward(spacing);
        myT.penDown();
        firework = new Explosions(myT.x, myT.y);
        fireworks.push(firework);
        firework.display();
        myT.right(ang);
    }

} //Moves turtle
function move(x, y) {
    this.penUp();
    this.moveTo(x, y);
    this.penDown();
}


// Initial start screen
function initial() {
    background(color(3, 8, 61));
    rocket = new Firework((width / 2) - 15, height - 100);
    sparks = [];
    myT = new Turtle(width / 2, 50);

}
