const screen17 = ( sketch ) => {

    var index = 0;
    var start = 0;
   
    let inconsolata;

    var x,y;

    var r, g, b;

    let bgColor, color;
     let img;
    let user = shuffled_headlines[16][0];
let headline = shuffled_headlines[16][1];
let imgPath = shuffled_headlines[16][2];
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

        canvas.addClass("screen17");
        
        bgColor = sketch.color(sketch.random(220,255), sketch.random(220,255), sketch.random(220,255));
        color = sketch.color(sketch.random(200,255), sketch.random(200,255), sketch.random(200,255));

    };

    t = 0;
    let scale = 0.5;

    sketch.draw = () => {
        sketch.background(bgColor);
         sketch.textFont(font_reg);

 let device_adjust = device.offsetWidth / 300;

        //console.log("speed: "+sketch.userSpeedF)
   sketch.noStroke();
          sketch.fill(color);

        let delta_time = sketch.deltaTime / 1000;
        //console.log(delta_time)
        t += delta_time * 0.3;
        let shapes_per_row = 30;
        let w = device.offsetWidth;
        let h = device.offsetHeight;
        let max_d = 200 * device_adjust;
        for(d=15;d<max_d;d*=1.2){
            for(i=0;i<shapes_per_row;i++){
                a=t+sketch.TAU/shapes_per_row*i+d/(900+sketch.sin(t*4)*300);
                x=sketch.quick_map(a)*d;
                y=sketch.quick_map(a+sketch.PI/2)*d;
                s=4+d/20+(sketch.abs(x)-sketch.abs(y))/20;
                s *= device_adjust
            
                    sketch.rect(w/2+x,h/2+y,s,s);
  
                
            }
        }

        // sketch.text("fps "+sketch.frameRate(), w-150, device.offsetHeight-40);

sketch.textFont(font_reg);
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


    sketch.quick_map = (n) => {
        return sketch.map(sketch.sin(n),-.5,.5,-1,1,1);
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
  