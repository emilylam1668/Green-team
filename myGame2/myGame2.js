/*global Phaser*/
var game = new Phaser.Game(window.innerWidth * 0.9, window.innerHeight, Phaser.AUTO, 'phaser-game');
var game_state = {}
let numIncorrect = 0;
let numCorrect = 0;
var fruitPicked;
var compost1;
var compost2;
var temp;
var compost1text;
var compost2text;
var compost3text;
var trash1;
var trash2;
var trash3;
var trash4;
var trash1text;
var trash2text;
var trash3text;
var recycle1;
var recycle2;
var recycle3;
var recycle1text;
var recycle2text;
var recycle3text;
var heart1;
var heart2;
var heart3;
var comtemp;
var dante;
var score = 0;
var combo = 0;
var scoreText;
var livesText;
var numLives = 3;
var comboText;
var pictures = 0;
var placeholder;
var arrFruits = [];
var items = ["temp","trash2",'trash3', 'trash1' , 'recycle1','recycle2','recycle3','compost1','compost2', 'trash4'];
var scaleX = [0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2];
var scaleY = [0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2];
var categories = ["trash", "recycle","compost"];
var fruitType = [];
var oldtext = '';

game_state.main = function() {};

var isGameOver = false;

// function testGameEnd(){
    
//     if ((numIncorrect >= 30) && isGameOver == false){
//         console.log("Game Over");
//         game.state.start("story");
//         isGameOver = true;
//         console.log("Story Executed Perfectly");
//     }else{
//         console.log("Keep Going");
//     }
// }
game_state.main.prototype = {
    testing: function(){
        //console.log("works")
    },
    preload: function() {
        game.load.image('background', 'assets/bg.png');
        game.load.image('trashtemp', 'assets/Trash.png');
        game.load.image('trashLight', 'assets/TrashLight.png');
        game.load.image('recytemp', 'assets/Recycle.png');
        game.load.image('recyLight', 'assets/RecycleLight.png');
        game.load.image('comtemp', 'assets/Compost.png');
        game.load.image('comLight', 'assets/CompostLight.png');
        game.load.image('barrierreal' , 'assets/barrier.png');
        game.load.image('barrierfake' , 'assets/barrierwhite.png');
        
        game.load.image('compost1', 'assets/bananapeel.png');
        game.load.image('compost2', 'assets/applecore.png');
        game.load.image('temp', 'assets/pizzaslice.png');
        
        game.load.image('trash1', 'assets/starbuckscup.png');
        game.load.image('trash2', 'assets/pencil.png');
        game.load.image('trash3', 'assets/straw.png');
        game.load.image('trash4' , 'assets/starbuckscup.png');
        
        game.load.image('recycle1', 'assets/linedpaper.png');
        game.load.image('recycle2', 'assets/waterbottle.png');
        game.load.image('recycle3', 'assets/waterjug.png');
        
        game.load.image('fullHeart', 'assets/heartfull.png');
        game.load.image('emptyHeart', 'assets/heartempty.png');
        
        game.load.image('heart3' , 'assets/heart3.png');
        game.load.image('heart2' , 'assets/heart2.png');
        game.load.image('heart1' , 'assets/heart1.png');
        
        game.load.spritesheet('dante', 'assets/bigdante.png', 200,170);
    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.sprite(0, 0, 'background');
        comtemp = game.add.sprite(1000,75, 'comtemp');
        comtemp.scale.setTo(0.45,0.45);
        trashtemp = game.add.sprite(150, 75, 'trashtemp');
        trashtemp.scale.setTo(0.45,0.45);
        recytemp = game.add.sprite(555, 75, 'recytemp');
        recytemp.scale.setTo(0.45,0.45);
        barrier = game.add.sprite(0,580, 'barrierreal');
        barrier.scale.setTo(0.25,1);
        game.physics.enable(barrier, Phaser.Physics.ARCADE);
        barrier.frame = 0;
        barrier.enableBody=true;
        
        //creation of hearts
        heart1 = game.add.sprite (0,29, 'heart1');
        heart1.scale.setTo(0.2,0.2);
        heart2 = game.add.sprite (0,29, 'heart2');
        heart2.scale.setTo(0.2,0.2);
        heart3 = game.add.sprite (0,29, 'heart3');
        heart3.scale.setTo(0.2,0.2);
        
        
        
        //creation of dante
        dante = game.add.sprite(25, 485, 'dante');
        game.physics.enable(dante, Phaser.Physics.ARCADE);
        dante.frame = 0;
        dante.enableBody=true;
        dante.animations.add('walk', [0,1], 6, true);
    
        // var rand = Math.floor(Math.random() * 9);
        // fruitPicked = items[rand];
        // console.log(rand);
        // //recytemp.create(400, 400, "recytemp");
        
        //compost items
        if(fruitPicked == "compost1"){
            compost1 = game.add.sprite(1000,580, 'compost1');
            compost1.scale.setTo(0.2,0.2);
            game.physics.enable(compost1, Phaser.Physics.ARCADE);
            compost1.enableBody=true;
        }
        if(fruitPicked == "compost2"){
            compost2 = game.add.sprite(1000,580, 'compost2');
            compost2.scale.setTo(0.2,0.2);
            game.physics.enable(compost2, Phaser.Physics.ARCADE);
            compost2.enableBody=true;
        }
        if(fruitPicked == "temp"){
            temp = game.add.sprite(1000,580, 'temp');
            temp.scale.setTo(1.2,1.2);
            game.physics.enable(temp, Phaser.Physics.ARCADE);
            temp.enableBody=true;
    }
    
    //trash items
    if(fruitPicked == "trash1"){
    trash1 = game.add.sprite(1000,580, 'trash1');
    trash1.scale.setTo(0.2,0.2);
    game.physics.enable(trash1, Phaser.Physics.ARCADE);
    trash1.enableBody=true;
    }
    if(fruitPicked == "trash2"){
    trash2 = game.add.sprite(1000,580, 'trash2');
    trash2.scale.setTo(0.2,0.2);
    game.physics.enable(trash2, Phaser.Physics.ARCADE);
    trash2.enableBody=true;
    }
    if(fruitPicked == "trash3"){
    trash3 = game.add.sprite(1000,580, 'trash3');
    trash3.scale.setTo(0.2,0.2);
    game.physics.enable(trash3, Phaser.Physics.ARCADE);
    trash3.enableBody=true;
    }
    if(fruitPicked == "trash4"){
    trash4 = game.add.sprite(1000,580, 'trash4');
    trash4.scale.setTo(0.2,0.2);
    game.physics.enable(trash4, Phaser.Physics.ARCADE);
    trash4.enableBody=true;
    }
    
    
    // recycling items
    if(fruitPicked == "recycle1"){
    recycle1 = game.add.sprite(1000,580, 'recycle1');
    recycle1.scale.setTo(0.2,0.2);
    game.physics.enable(recycle1, Phaser.Physics.ARCADE);
    recycling1.enableBody=true;
    }
    if(fruitPicked == "recycle2"){
    recycle2 = game.add.sprite(1000,580, 'recycle2');
    recycle2.scale.setTo(0.2,0.2);
    game.physics.enable(recycle2, Phaser.Physics.ARCADE);
    }
    if(fruitPicked == "recycle3"){
    recycle3 = game.add.sprite(1000,580, 'recycle3');
    recycle3.scale.setTo(0.2,0.2);
    game.physics.enable(recycle3, Phaser.Physics.ARCADE);
    }
    
    
    },
    
    helper: function(name, x, y) {
        var fruit = game.add.sprite(1000, 580, name);
        fruit.scale.setTo(x, y);
        game.physics.enable(fruit, Phaser.Physics.ARCADE);
        fruit.body.velocity.x = -100;
        if (score > 80){
        fruit.body.velocity.x = -200;
        }
        if (score > 150){
        fruit.body.velocity.x = -300;
        }
        if (score > 300){
            fruit.body.velocity.x= -500;
        }
        if (score > 400){
            fruit.body.velocity.x= -600;
        }
        if (score > 500){
            fruit.body.velocity.x= -800;
        }
        if (score > 600){
            fruit.body.velocity.x= -1000;
        }
        arrFruits.push(fruit);
        placeholder = name;
        fruitType.push(name);
        
    },

    update: function() {
        //console.log("number1");
        this.cursors = game.input.keyboard.createCursorKeys();
        
        dante.animations.play('walk');
        
        //spawning multiple things
        var name = "";
        var category = "";
        var dividingFactor = 100;
        if (score > 80){
            dividingFactor = 75;
        }
        if (score > 150){
            dividingFactor = 50;
        }
        
        if (pictures%dividingFactor == 0){
        var rand = Math.floor(Math.random()*9);
        console.log(rand);
        name = items[rand];
        console.log(name);
        fruitPicked = name;
        var x = scaleX[rand];
        var y = scaleY[rand];
        // console.log(arrFruits);
        //this.helper(name,x,y);
        setInterval(this.helper(name,x,y), 5000);
        //console.log(name);
        // console.log("timedout");
        
        }
        pictures++;   

        // //combo multiplier
        // if (combo > 0)
        // {
        //     var temp = Math.floor(combo/25);
        //     if (temp > 1 )
        //     {
        //          * 1.1**temp;
        //     }
        // }
        
        //Collisions
        //console.log(arrFruits[arrFruits.length-1]);
        
        for (var i = 0; i < arrFruits.length; i++) {
            
            // console.log(fruitType[i]);
            // console.log(fruitType[i] == "trash1");
              if((fruitType[i] == "trash1" || fruitType[i] =="trash2" || fruitType[i] =="trash3" || fruitType[i] == "trash4")){
                if(this.cursors.left.isDown && game.physics.arcade.overlap(dante, arrFruits[i], this.testing, null, this)){
                score = score + 10;
                arrFruits[i].kill();
                numCorrect++;
                trashLight = game.add.sprite(150, 75, 'trashLight');
                trashLight.scale.setTo(0.45,0.45);
                setTimeout(function(){trashLight.kill()}, 500);
                console.log("trash correct");
                }
            }else if(fruitType[i] == "recycle1" || fruitType[i] =="recycle2" ||fruitType[i] == "recycle3"){
                if(this.cursors.up.isDown && game.physics.arcade.overlap(dante, arrFruits[i], this.testing, null, this)){
                    // console.log(fruitType[i]);
                score = score + 10;
                arrFruits[i].kill();
                numCorrect++;
                recyLight = game.add.sprite(555, 75, 'recyLight');
                recyLight.scale.setTo(0.45,0.45);
                setTimeout(function () {recyLight.kill()}, 500);
                console.log("recycle correct");
                }
            }else if ((fruitType[i] == "compost1" || fruitType[i] == "compost2" || fruitType[i] == "temp")){
                  
                if(this.cursors.right.isDown && game.physics.arcade.overlap(dante, arrFruits[i], this.testing, null, this)){
                    score = score + 10;
                    arrFruits[i].kill();
                    numCorrect++;
                    comLight = game.add.sprite(1000,75, 'comLight');
                    comLight.scale.setTo(0.45,0.45);
                    setTimeout(function (){comLight.kill()}, 500);
                    console.log("compost correct");
                }
            }
            for(var j = 0 ;  j < i ; j++){
                debugger
                if (game.physics.arcade.overlap(barrier, arrFruits[i], this.testing, null, this)){
                console.log(game.physics.arcade.overlap(barrier, arrFruits[i], this.testing, null, this));
                numLives--;
                if(numLives == 2){
                    heart3.kill();
                    
                }if(numLives == 1){
                    heart2.kill();
                    
                }
                console.log("life drop");
                var typing = fruitType[i];
                console.log(typing);
                arrFruits[i].kill();
                if (numLives <= 0){
                    console.log("Game Over");
                    game.state.start("story");
                    isGameOver = true;
                    console.log("Story Executed Perfectly");
                    }else{
                        console.log("Keep Going");
                    
                }
                if (typing == "compost1")
                {
                    console.log("hello");
                    game.world.remove(oldtext);
                    compost1text = game.add.text (200,500, 'Oh no! Banana peels belong in the compost bin.\n It adds organic material and nutrients to the mix of compost. ', {fontSize: '10px',fill:'#000'});
                    oldtext = compost1text;
                    setTimeout(function(){game.world.remove(compost1text)}, 2000);

                    
                }
                if (typing == "compost2")
                {
                    game.world.remove(oldtext);
                    compost2text = game.add.text (200,500, 'Oh no! Apple cores belong in the compost bin.\n They bring a good source of nitrogen to compost, which helps break down the compost. ',{fontSize: '10px',fill:'#000'});
                    oldtext = compost2text;                   
                    setTimeout(function(){game.world.remove(compost2text)}, 2000);

                }
                if (typing == "temp")
                {
                    game.world.remove(oldtext);
                    compost3text = game.add.text (200,500, 'Oh no! Pizza belongs in the compost bin.\n Foods like pizza are biodegradable and can be composted.',{fontSize: '10px',fill:'#000'});
                    oldtext = compost3text;                    
                    setTimeout(function(){game.world.remove(compost3text)}, 2000);


                }
                if (typing == "trash1")
                {
                    game.world.remove(oldtext);
                    trash1text = game.add.text (200,500, 'Stop! Coffee cups contain a mix of plastic and paper\n and cannot be recycled or biodegraded.',{fontSize: '10px',fill:'#000'});
                    oldtext = trash1text;                    
                    setTimeout(function(){game.world.remove(trash1text)}, 2000);


                }
                if (typing == "trash2") 
                {
                    game.world.remove(oldtext);
                    trash2text = game.add.text (200, 500, 'Pencils fused with wood and metals cannot be recycled nor biodegraded!', {fontSize: '10px',fill:'#000'});
                    oldtext = trash2text;                   
                    setTimeout(function(){game.world.remove(trash2text)}, 2000);

                }
                if (typing == "trash3")
                {
                    game.world.remove(oldtext);
                    trash3text = game.add.text (200,500, 'Hey! Straws are too small to be recycled.\nThey belong in the trash!', {fontSize: '10px', fill:'#000'});
                    oldtext = trash3text;
                    setTimeout(function(){game.world.remove(trash3text)}, 2000);

                }
                if(typing == "recycle1") 
                {
                    game.world.remove(oldtext);
                    recycle1text = game.add.text (200, 500, 'Lined paper can be recycled! It COULD be composted as well, but the ink contains harmful chemicals!', {fontSize: '10px',fill:'#000'});               
                    oldtext = recycle1text;                    
                    setTimeout(function(){game.world.remove(recycle1text)}, 2000);

                }
                if (typing == "recycle2")
                {
                    game.world.remove(oldtext);
                    recycle2text = game.add.text (200,500, 'Water bottles can be recycled!\n You should know this!', {fontSize: '10px',fill:'#000'});
                    oldtext = recycle2text;
                    setTimeout(function(){game.world.remove(recycle2text)}, 2000);

                }
                if (typing == "recycle3")
                {
                    game.world.remove(oldtext);
                    recycle3text = game.add.text (200,500, 'Hey! Jugs can be recycled.\n Most single use bottles will end up at the CarbonLite Riverside facility.', {fontSize: '10px',fill:'#000'});
                    oldtext = recycle3text;
                    setTimeout(function(){game.world.remove(recycle3text)}, 2000);

                }
                    
            }
            }


        }   
        
           
        game.world.remove(scoreText);
        scoreText = game.add.text (0,0, 'Score: ' + score, {fontSize: '10px',fill: '#000'});
       //game.world.remove(livesText);
        //livesText = game.add.text (0,25, 'Lives: ' + numLives, {fontSize: '10px',fill: '#000'});
        //scoreText.kill();
        
        //Combo Text
 
        
        // if()
        
        // function destroySprite(sprite) {
        //     sprite.destroy();
        // }
        //
    }

}
game.state.add('main', game_state.main);
game.state.start('main');
