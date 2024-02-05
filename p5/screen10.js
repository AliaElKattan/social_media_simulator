const screen10 = ( sketch ) => {

    var index = 0;
    var start = 0;
    var bgColor;
    var color;

    let inconsolata;

    var x,y, c;
    let img;
    let user = shuffled_headlines[9][0];
    let headline = shuffled_headlines[9][1];
    let imgPath = shuffled_headlines[9][2];

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

        canvas.addClass("screen10");

        c = sketch.color(sketch.random(220,255),sketch.random(220,255),sketch.random(220,255),255);
        c2 = sketch.color(sketch.random(240,255),sketch.random(240,255),sketch.random(240,255),255);

    };
    sketch.draw = () => {

        sketch.background(255);


         let t = sketch.millis() / 1000;


        w = device.offsetWidth;
        h = device.offsetHeight;
        s = device.offsetWidth / 7;
        // c = sketch.color(sketch.random(255),sketch.random(209),sketch.random(200),100)

        

        sketch.noStroke()
        // sketch.background(102,99,91)
        for(x=-s;x<w;x+=s){
            for(y=-s;y<h;y+=s){
                p=(t+(x+y)*.0025)%2-1;
                o=(.5+p*.5)*s*.5;
                // sketch.fill(p>0?s:c);
                sketch.fill(c2);
                sketch.rect(x+o,y+o,s,s);
                sketch.fill(c);
                // sketch.fill(p>0?c:-s);


                if (sketch.userShape == "square"){
                    sketch.square(x+s/2,y+s/2,p*s*.9);
                }
                else if (sketch.userShape == "circle"){
                    sketch.circle(x+s/2,y+s/2,p*s*.9);
                }
                else{
                    let ts = p*s*.75;
                    sketch.triangle(x-ts/2,y+ts/2, x+ts/2,y+ts/2, x+0,y-ts/2 );
                }

                
            }
        }
        
        

    sketch.fill(0);

    sketch.textSize(20);
    sketch.textAlign(sketch.CENTER);
sketch.textFont(font_reg);
     sketch.text(headline, sketch.width / 2, sketch.height / 4 + (sketch.height * .15));


sketch.textFont(font_bold);
sketch.textSize(16);
sketch.textAlign(sketch.LEFT);
sketch.text(user, sketch.width * .08, sketch.height * .9);


sketch.image(img, sketch.width*.88, sketch.height*.32,35,35);
    };


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
  