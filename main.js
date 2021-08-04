var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');
var color = "blue";
var width = 3;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.arc(200, 200, 50, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown (e) {
    mousex = e.clientX-canvas.offsetLeft;
    mousey = e.clientY-canvas.offsetTop;
    circle(mousex,mousey);
}
function circle (mousex,mousey) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(mousex, mousey, 50, 0, 2*Math.PI);
    ctx.stroke();
}   
