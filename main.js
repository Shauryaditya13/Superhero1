var canvas= new fabric.Canvas('myCanvas');
block_image_height=30;
block_image_width=30;
player_X=10;
player_Y=10;
var player_Object="";
var block_image_Object="";

function player_update() {
    fabric.Image.fromURL("Player.png",function(uploaded_player_image) {
        player_Object=uploaded_player_image;
        player_Object.scaleToWidth(150);
        player_Object.scaleToHeight(140);
        player_Object.set({
            top:player_Y,left:player_X
        });
        canvas.add(player_Object);

    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(uploaded_block_image){
        block_image_Object=uploaded_block_image;
        block_image_Object.scaleToWidth(block_image_width);
        block_image_Object.scaleToHeight(block_image_height);
        block_image_Object.set({
            top:player_Y,left:player_X
        });
        canvas.add(block_image_Object);
    });

}

player_update();

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true&&keypressed=='80') {
        console.log("p and shiftkey are pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(e.shiftKey==true&&keypressed=='77') {
        console.log("m and shiftkey are pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(keypressed=='38'){
        Up();
        console.log("Up key is pressed");
    }

    if(keypressed=='40'){
        Down();
        console.log("Down key is pressed");
    }

    if(keypressed=='37'){
        Left();
        console.log("Left key is pressed");
    }

    if(keypressed=='39'){
        Right();
        console.log("Right key is pressed");
    }

    if (keypressed == '65') {
        new_image('captain_america_left_hand.png');
        console.log("A is pressed");
    }

    if (keypressed == '66') {
        new_image('hulk_body.png');
        console.log("B is pressed");
    }

    if (keypressed == '67') {
        new_image('hulk_face.png');
        console.log("C is pressed");
    }

    if (keypressed == '68') {
        new_image('hulk_left_hand.png');
        console.log("D is pressed");
    }

    if (keypressed == '69') {
        new_image('hulk_legs.png');
        console.log("E is pressed");
    }

    if (keypressed == '70') {
        new_image('hulk_right_hand.png');
        console.log("F is pressed");
    }

    if (keypressed == '71') {
        new_image('ironman_body.png');
        console.log("G is pressed");
    }

    if (keypressed == '72') {
        new_image('ironman_face.png');
        console.log("H is pressed");
    }

    if (keypressed == '73') {
        new_image('ironman_left_hand.png');
        console.log("I is pressed");
    }

    if (keypressed == '74') {
        new_image('ironman_legs.png');
        console.log("J is pressed");
    }

    if (keypressed == '75') {
        new_image('ironman_right_hand.png');
        console.log("K is pressed");
    }

    if (keypressed == '76') {
        new_image('spiderman_body.png');
        console.log("L is pressed");
    }

    if (keypressed == '84') {
        new_image('spiderman_face.png');
        console.log("T is pressed");
    }

    if (keypressed == '78') {
        new_image('siderman_left_hand.png');
        console.log("N is pressed");
    }

    if (keypressed == '79') {
        new_image('spiderman_legs.png');
        console.log("O is pressed");
    }

    if (keypressed == '85') {
        new_image('spiderman_right_hand.png');
        console.log("U is pressed");
    }

    if (keypressed == '81') {
        new_image('thor_face.png');
        console.log("Q is pressed");
    }

    if (keypressed == '82') {
        new_image('thor_left_hand.png');
        console.log("R is pressed");
    }

    if (keypressed == '83') {
        new_image('thor_right_hand.png');
        console.log("S is pressed");
    }
}

function Up() {
    if (player_Y >= 0) {
        player_Y = player_Y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When up arrow key is pressed, X = " + player_X + ", Y = " + player_Y);
        canvas.remove(player_Object);
        player_update();
    }
}

function Down() {
    if (player_Y <= 500) {
        player_Y = player_Y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When down arrow key is pressed, X = " + player_X + ", Y = " + player_Y);
        canvas.remove(player_Object);
        player_update();
    }
}

function Left() {
    if (player_X >= 0) {
        player_X = player_X - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When left arrow key is pressed, X = " + player_X + ", Y = " + player_Y);
        canvas.remove(player_Object);
        player_update();
    }
}

function Right() {
    if (player_X <= 700) {
        player_X = player_X + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When right arrow key is pressed, X = " + player_X + ", Y = " + player_Y);
        canvas.remove(player_Object);
        player_update();
    }
}

