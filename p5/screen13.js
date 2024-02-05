const screen13 = ( sketch ) => {

    var index = 0;
    var start = 0;
    var bgColor;
    var color;

    let inconsolata;

    var x,y;
     let img;
    let user = shuffled_headlines[12][0];
let headline = shuffled_headlines[12][1];
let imgPath = shuffled_headlines[12][2];
let shapes = [];


      var sounds = ['../audio/sound1.m4a', 
      '../audio/sound2.m4a',
      '../audio/sound3.m4a',
      '../audio/sound4.m4a',
      '../audio/sound5.m4a',
      '../audio/sound6.m4a',
      '../audio/sound7.m4a',
      '../audio/sound8.m4a',
      '../audio/sound9.m4a',
      '../audio/sound10.m4a'
      ];


    sketch.preload = () => {
        soundPath = sketch.random(sounds);
        font_reg = sketch.loadFont('uncut-sans/Uncut-Sans-Regular.otf');
        font_bold = sketch.loadFont('uncut-sans/Uncut-Sans-Bold.otf');
        img = sketch.loadImage(imgPath);
        // testSound = sketch.loadSound(soundPath);
    };

    sketch.setup = () => {
        var deviceScreen = document.getElementById("device-screen");
        var canvas = sketch.createCanvas(deviceScreen.offsetWidth, deviceScreen.offsetHeight);
        canvas.addClass("p5-content");

        canvas.addClass("screen13");
        

        for (let i = 0; i < 10; i++) {
        shapes.push(new AnimatedShape());
  }

    };


    sketch.draw = () => {
        if(start ==0) {
            // testSound.play();
            // // console.log("playing");
        }
        start=1;
        sketch.background(255);

  // Update and display animated shapes
  for (let shape of shapes) {
    shape.update();
    shape.display();
  }

    sketch.textSize(20);
  sketch.textAlign(sketch.CENTER);
  sketch.fill(0);
sketch.text(headline, sketch.width / 2, sketch.height / 4 + (sketch.height * .15));

sketch.textFont(font_bold);
sketch.textSize(16);
sketch.textAlign(sketch.LEFT);
sketch.text(user, sketch.width * .08, sketch.height * .9);


sketch.image(img, sketch.width*.88, sketch.height*.32,35,35);


    };

    sketch.setColor = () => {
        
    }

    sketch.setDraw = (shouldDraw) =>{
        if (shouldDraw && !sketch.isLooping()){
            sketch.loop();
            // testSound.play();
        }
        else if (!shouldDraw && sketch.isLooping()){
            sketch.noLoop();
            // testSound.stop();
        }
    }

    class AnimatedShape {
  constructor() {
    this.x = sketch.random(sketch.width);
    this.y = sketch.random(sketch.height);
    this.radius = sketch.random(10, 30);
    this.speedX = sketch.random(-2, 2);
    this.speedY = sketch.random(-2, 2);
    this.color = sketch.color(sketch.random(255), sketch.random(255), sketch.random(255), 150);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off the canvas edges
    if (this.x < sketch.width * -1|| this.x > sketch.width) {
      this.speedX *= -1;
    }

    if (this.y < sketch.width * -1 || this.y > sketch.height) {
      this.speedY *= -1;
    }
  }

  display() {
    sketch.noStroke();
    sketch.fill(this.color);
    sketch.ellipse(this.x, this.y, this.radius * 20, this.radius * 20);
    sketch.textFont(font_reg);
  // Display headline

  }
}



  };
  