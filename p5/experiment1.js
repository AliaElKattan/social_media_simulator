const experiment1 = ( sketch ) => {

    var index = 0;
    var bgColor;
    var color;

    let inconsolata;

    sketch.preload = () => {
     inconsolata = sketch.loadFont('inconsolata.otf');
    }


    sketch.setup = () => {
        var deviceScreen = document.getElementById("device-screen");
        var canvas = sketch.createCanvas(deviceScreen.offsetWidth, deviceScreen.offsetHeight, sketch.WEBGL);
        canvas.addClass("p5-content");

        canvas.addClass("experiment1");

    };




    sketch.draw = () => {
        sketch.background(255);
        sketch.fill(0);
        sketch.textSize(20);
        sketch.textFont(inconsolata);
        sketch.text("Groups of hostages and \n prisoners are freed amid  \n pause in Gaza fighting",-150,0);
    };

    sketch.setColor = () => {
        
    }

    sketch.setDraw = (shouldDraw) =>{
        if (shouldDraw && !sketch.isLooping()){
            sketch.loop();
        }
        else if (!shouldDraw && sketch.isLooping()){
            sketch.noLoop();
        }
    }
  };
  
  
  