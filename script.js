var canvas = document.createElement("canvas");

canvas.width = 1920;
canvas.height = 1080;

var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const x = canvas.width / 2;

ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(x, 0);
ctx.lineTo(x, canvas.height);
ctx.stroke();

ctx.font = '30px cascadia-code';

ctx.textAlign = 'center';
ctx.fillText('<>Today</>', x, canvas.height/2);

var url = canvas.toDataURL();

var a = document.createElement("a");
a.download = "bg.png";
a.href = url;
a.textContent = "Download PNG";

document.body.appendChild(a);
document.body.appendChild(canvas);
