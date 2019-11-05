/*global Phaser game game_state*/
var menu = {

    create: function()
    {
        var title = game.add.text(80,80, 'Beach Cleanup!');
        var instructions = game.add.text(80,120, 'press "w" to start');
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        wkey.onDown.addOnce(this.start, this);
    },
    
    start: function()
    {
         game.state.start('main');
    },
    

    
}
