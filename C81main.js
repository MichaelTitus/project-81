canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");



ctx.beginPath();
ctx.strokeStyle = "#0085C7";
ctx.lineWidth = 7;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#F4C300";
ctx.lineWidth = 7;
ctx.arc(290, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#000000";
ctx.lineWidth = 7;
ctx.arc(380, 200, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "#009F3D";
ctx.lineWidth = 7;
ctx.arc(240, 255, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "#DF0024";
ctx.lineWidth = 7;
ctx.arc(340, 255, 40, 0, 2 * Math.PI);
ctx.stroke();




