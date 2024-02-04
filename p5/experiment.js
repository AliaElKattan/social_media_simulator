const screen1 = ( sketch ) => {

    var index = 0;
    var start = 0;
    var bgColor;
    var color;

    let inconsolata;

    var x,y;

    let headline = "Tens of thousands of rape \n victims became pregnant in \n states with abortion bans, \n study estimates";
    let shapes = [];


    sketch.preload = () => {
        inconsolata = sketch.loadFont('inconsolata.otf');
        // testSound = sketch.loadSound("../audio/break.mp3");
    }


    sketch.setup = () => {
        var deviceScreen = document.getElementById("device-screen");
        var canvas = sketch.createCanvas(deviceScreen.offsetWidth, deviceScreen.offsetHeight, sketch.WEBGL);
        canvas.addClass("p5-content");

        canvas.addClass("screen1");
    
        

        for (let i = 0; i < 10; i++) {
        shapes.push(new AnimatedShape());
  }

    };


    sketch.draw = () => {
        if(start ==0) {
            // testSound.play();
            console.log("playing");
        }
        start=1;
        sketch.background(255);

sketch.textFont(inconsolata);
  // Display headline
  sketch.textSize(24);
  sketch.textAlign(sketch.CENTER);
  sketch.fill(0);
  sketch.text(headline, sketch.width / 2 - 170, 120);

  // Update and display animated shapes
  for (let shape of shapes) {
    shape.update();
    shape.display();
  }

        sketch.textFont(inconsolata);
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
    if (this.x < 0 || this.x > sketch.width) {
      this.speedX *= -1;
    }

    if (this.y < 0 || this.y > sketch.height) {
      this.speedY *= -1;
    }
  }

  display() {
    sketch.noStroke();
    sketch.fill(this.color);
    sketch.ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
}



  };
  

  const screen2 = ( sketch ) => {

    var index = 0;
    var start = 0;
    var bgColor;
    var color;

    let inconsolata;

    var x,y;

    let headline = "Tens of thousands of rape \n victims became pregnant in \n states with abortion bans, \n study estimates";
    let shapes = [];


    sketch.preload = () => {
        inconsolata = sketch.loadFont('inconsolata.otf');
        // testSound = sketch.loadSound("../audio/break.mp3");
    }


    sketch.setup = () => {
        var deviceScreen = document.getElementById("device-screen");
        var canvas = sketch.createCanvas(deviceScreen.offsetWidth, deviceScreen.offsetHeight, sketch.WEBGL);
        canvas.addClass("p5-content");

        canvas.addClass("screen2");
        

        for (let i = 0; i < 10; i++) {
        shapes.push(new AnimatedShape());
  }

    };


    sketch.draw = () => {
        if(start ==0) {
            // testSound.play();
            console.log("playing");
        }
        start=1;
        sketch.background(255);

sketch.textFont(inconsolata);
  // Display headline
  sketch.textSize(24);
  sketch.textAlign(sketch.CENTER);
  sketch.fill(0);
  sketch.text(headline, sketch.width / 2 - 170, 120);

  // Update and display animated shapes
  for (let shape of shapes) {
    shape.update();
    shape.display();
  }

        sketch.textFont(inconsolata);
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
    if (this.x < 0 || this.x > sketch.width) {
      this.speedX *= -1;
    }

    if (this.y < 0 || this.y > sketch.height) {
      this.speedY *= -1;
    }
  }

  display() {
    sketch.noStroke();
    sketch.fill(this.color);
    sketch.ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
}



  };

  const screen3 = ( sketch ) => {

    var index = 0;
    var start = 0;
    var bgColor;
    var color;

    let inconsolata;

    var x,y;

    let headline = "Tens of thousands of rape \n victims became pregnant in \n states with abortion bans, \n study estimates";
    let shapes = [];


    sketch.preload = () => {
        inconsolata = sketch.loadFont('inconsolata.otf');
        // testSound = sketch.loadSound("../audio/break.mp3");
    }


    sketch.setup = () => {
        var deviceScreen = document.getElementById("device-screen");
        var canvas = sketch.createCanvas(deviceScreen.offsetWidth, deviceScreen.offsetHeight, sketch.WEBGL);
        canvas.addClass("p5-content");

        canvas.addClass("screen3");
        

        for (let i = 0; i < 10; i++) {
        shapes.push(new AnimatedShape());
  }

    };


    sketch.draw = () => {
        if(start ==0) {
            // testSound.play();
            console.log("playing");
        }
        start=1;
        sketch.background(255);

sketch.textFont(inconsolata);
  // Display headline
  sketch.textSize(24);
  sketch.textAlign(sketch.CENTER);
  sketch.fill(0);
  sketch.text(headline, sketch.width / 2 - 170, 120);

  // Update and display animated shapes
  for (let shape of shapes) {
    shape.update();
    shape.display();
  }

        sketch.textFont(inconsolata);
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
    if (this.x < 0 || this.x > sketch.width) {
      this.speedX *= -1;
    }

    if (this.y < 0 || this.y > sketch.height) {
      this.speedY *= -1;
    }
  }

  display() {
    sketch.noStroke();
    sketch.fill(this.color);
    sketch.ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
}



  };
  

  const screen4 = ( sketch ) => {

    var index = 0;
    var start = 0;
    var bgColor;
    var color;

    let inconsolata;

    var x,y;

    let headline = "Tens of thousands of rape \n victims became pregnant in \n states with abortion bans, \n study estimates";
    let shapes = [];


    sketch.preload = () => {
        inconsolata = sketch.loadFont('inconsolata.otf');
        // testSound = sketch.loadSound("../audio/break.mp3");
    }


    sketch.setup = () => {
        var deviceScreen = document.getElementById("device-screen");
        var canvas = sketch.createCanvas(deviceScreen.offsetWidth, deviceScreen.offsetHeight, sketch.WEBGL);
        canvas.addClass("p5-content");

        canvas.addClass("screen4");
        

        for (let i = 0; i < 10; i++) {
        shapes.push(new AnimatedShape());
  }

    };


    sketch.draw = () => {
        if(start ==0) {
            // testSound.play();
            console.log("playing");
        }
        start=1;
        sketch.background(255);

sketch.textFont(inconsolata);
  // Display headline
  sketch.textSize(24);
  sketch.textAlign(sketch.CENTER);
  sketch.fill(0);
  sketch.text(headline, sketch.width / 2 - 170, 120);

  // Update and display animated shapes
  for (let shape of shapes) {
    shape.update();
    shape.display();
  }

        sketch.textFont(inconsolata);
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
    if (this.x < 0 || this.x > sketch.width) {
      this.speedX *= -1;
    }

    if (this.y < 0 || this.y > sketch.height) {
      this.speedY *= -1;
    }
  }

  display() {
    sketch.noStroke();
    sketch.fill(this.color);
    sketch.ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }
}



  };
  
  