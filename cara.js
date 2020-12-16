
var sketchProc = function(processingInstance){
   with(processingInstance){
   	size(400,400);
   	background(255, 255, 255);
ellipse(212, 206, 283, 318);
ellipse(212, 250, 100, 73);
ellipse(150, 150, 30, 30);
ellipse(278, 150, 30, 30);    
}
};
var canvas = document.getElementById("mycanvas");
var processing = new Processing(canvas, sketchProc);