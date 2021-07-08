canvas = document.getElementById('myCanvas');
ctx = canvas.getcontext("2d");

function add() {
    img_imgTag = new Image(); 
    img_imgTag.onload = uploadimg; 
    img_imgTag.src = img_image;  
}
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90));
        else{
            otherkey();
            document.getElementById("d1").innerHTML="You pressed symbol or other key";
        }
        }
function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
window.addEventListener('keydown', my_keydown);

function myCanvas(e){


}
function aplhabetkey()
{
    img_image="Alpkey.png";

}
function numberkey()
{
	img_image="number.png";
}
function arrowkey()
{
    img_image="Arrkey.png";
}
function specialkey()
{
	img_image="spkey.png";
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	