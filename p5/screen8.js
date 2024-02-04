const screen8 = ( sketch ) => {

    var index = 0;
    var start = 0;
    var bgColor;
    var color;

    let inconsolata;

    var x,y;

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
        console.log("ENTERED PRELOAD 3");
        soundPath = sketch.random(sounds);
        console.log("3", soundPath);
        inconsolata = sketch.loadFont('inconsolata.otf');
        testSound = sketch.loadSound(soundPath);
    };

    sketch.setup = () => {
        var deviceScreen = document.getElementById("device-screen");
        var canvas = sketch.createCanvas(deviceScreen.offsetWidth, deviceScreen.offsetHeight, sketch.WEBGL);
        canvas.addClass("p5-content");

        canvas.addClass("screen8");


    };


    sketch.draw = () => {

        sketch.background(255);

        let time = sketch.millis() / 1000.0;
        time *= sketch.userSpeedF;
        let delta_time = sketch.deltaTime / 1000.0;

        if(start ==0) {
            // testSound.play();
            console.log("playing");
        }
        start=1;


         //shape grid
        let bg_spacing = device.offsetWidth * 0.1;
        let bg_period = 2;

        let bg_off_x = bg_spacing * ( (time * bg_period) % 1);
        let bg_off_y = Math.sin(time) * bg_spacing * 2;

        sketch.fill(color);

        let cols = 0;
        for(let x=-bg_spacing-bg_off_x; x<device.offsetWidth+bg_spacing; x+=bg_spacing){
            cols++;
            for(let y=-bg_spacing*2-bg_off_y; y<device.offsetHeight+bg_spacing*2; y+=bg_spacing){

                if (sketch.userShape == "square"){
                    sketch.push();
                    sketch.translate(x,y);
                    sketch.rotate(x/30 + y/30)
                    let size = bg_spacing/2
                    sketch.square(-size/2,-size/2, size);
                    sketch.pop();
                }
                else if (sketch.userShape == "circle"){
                    let size =  bg_spacing/2 + Math.sin(x/30 + y/30) * 2;
                    sketch.circle(x,y, size);
                }
                else{
                    let ts = bg_spacing*0.5;
                    sketch.push();
                    sketch.translate(x,y);
                    sketch.rotate(x/30 + y/30)
                    sketch.triangle(ts/2,ts/2, -ts/2,ts/2, 0,-ts/2 );
                    sketch.pop();
                }

            }
        }



    sketch.textSize(24);
  sketch.textAlign(sketch.CENTER);
  sketch.fill(0);
  sketch.text(headline, sketch.width / 2 - 170, 120);


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
  