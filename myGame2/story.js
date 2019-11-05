/*global Phaser game game_state*/
var gameover;
var Fact1;
var Fact2;
var Fact3;
var Fact4;
var Fact5;
var Fact6;
game_state.story = function() {};
console.log("Starting Story");
var random = Math.floor(Math.random()*6);
console.log(random);
game_state.story.prototype = {

    preload: function() {
        game.load.image('gameover', 'assets/gameovercool.png');
        game.load.image('Fact1', 'assets/78625.jpg');
        game.load.image('Fact2', 'assets/ahahahah.jpg');
        game.load.image('Fact3', 'assets/oh.jpg');
        game.load.image('Fact4', 'assets/beached.jpg');
        game.load.image('Fact5', 'assets/Turt.jpg');
        game.load.image('Fact6', 'assets/boom.jpg');

    },

    create: function() {
        
        random = 0;
        if (random == 0){
            Fact1 = game.add.sprite(0,0, 'Fact1');
            Fact1.scale.setTo(0.75,0.75);
        }else if (random == 1){
            Fact2 = game.add.sprite(0,0, 'Fact2');
            Fact2.scale.setTo(2,2);
        }else if (random == 2){
            Fact3 = game.add.sprite(0,0, 'Fact3');
            Fact3.scale.setTo(2.25,2.25);
        }else if (random == 3){
            Fact4 = game.add.sprite(0,0, 'Fact4');
            Fact4.scale.setTo(1.25,1.25);
        }else if (random == 4){
            Fact5 = game.add.sprite(0,0, 'Fact5');
            Fact5.scale.setTo(0.5,0.5);
        }else if (random == 5){
            Fact6 = game.add.sprite(0,0, 'Fact6');
            Fact6.scale.setTo(3,3);
        }
        gameover = game.add.sprite(0, 0, 'gameover');
        gameover.scale.setTo(3.5,2.7);

    },

    update: function() {
        setTimeout(function (){gameover.kill()}, 4000);
        // if(this.cursors.down.isDown) {
        //     this.game.state.restart()
        // }
    },
};
game.state.add('story', game_state.story);
//game.state.start('story');