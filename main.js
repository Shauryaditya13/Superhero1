var canvas= new fabric.Canvas('myCanvas');
block_image_height=30;
block_image_width=30;
player_X=10;
player_Y=10;
var player_Object="";
var block_image_Object="";

function player_update() {
    fabric.Image.fromURL("Player.png",function(img) {
        player_Object=img;
        player_Object.scaleToWidth(150);
        player_Object.scaleToHeight(140);
        player_Object.set({
            top:player_Y,left:player_X
        });
        canvas.add(player_Object);

    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(img){
        block_image_Object=img;
        block_image_Object.scaleToWidth(block_image_width);
        block_image_Object.scaleToHeight(block_image_height);
        block_image_Object.set({
            top:player_Y,left:player_X
        });
        canvas.add(block_image_Object);
    });

}

player_update();