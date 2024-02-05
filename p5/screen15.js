const screen15 = ( sketch ) => {

    var index = 0;
    var start = 0;
    var bgColor;
    var color;

    let inconsolata;

    var x,y;

    var r, g, b;
     let img;
    let user = shuffled_headlines[14][0];
let headline = shuffled_headlines[14][1];
let imgPath = shuffled_headlines[14][2];
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

        canvas.addClass("screen15");
        
        r = sketch.random(100,255);
        g = sketch.random(100,255);
        b = sketch.random(100,255);

    };


    sketch.draw = () => {
         sketch.textFont(font_reg);
        
        sketch.background(r,g,b);

        if(r < 255) {
            r= r++;
        }
        else if (r < 100) {r--};
        if (g < 255) {
            g++;
        } else if (g < 100) {g--};

        if(b < 255) {
            b++;
        } else if (g < 100) {g--};

  
        start=1;

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


  };
  