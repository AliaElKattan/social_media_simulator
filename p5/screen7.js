const screen7 = ( sketch ) => {

    var index = 0;
    var start = 0;
    var bgColor;
    var color;

    let inconsolata;

    var x,y;

    var r, g, b;

    let headline = "Tens of thousands of rape \n victims became pregnant in \n states with abortion bans, \n study estimates";
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
        console.log("entered preload");
        soundPath = sketch.random(sounds);
        console.log(soundPath);
        inconsolata = sketch.loadFont('inconsolata.otf');
        testSound = sketch.loadSound(soundPath);
    };


    sketch.setup = () => {
        var deviceScreen = document.getElementById("device-screen");
        var canvas = sketch.createCanvas(deviceScreen.offsetWidth, deviceScreen.offsetHeight, sketch.WEBGL);
        canvas.addClass("p5-content");

        canvas.addClass("screen7");
        
        r = sketch.random(100,255);
        g = sketch.random(100,255);
        b = sketch.random(100,255);

        console.log("r", r);
        console.log("g", g);
        console.log("b", b);


    };


    sketch.draw = () => {
         sketch.textFont(inconsolata);
        
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

    sketch.textSize(24);
  sketch.textAlign(sketch.CENTER);
  sketch.fill(0);
  sketch.text(headline, sketch.width / 2 - 185, 120);


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
            testSound.stop();
        }
    }


  };
  