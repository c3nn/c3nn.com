(function(){

const can = document.querySelector('.bgCanvas'),
c = can.getContext('2d');
function updateSize(){
	can.width = window.innerWidth;
	can.height = window.innerHeight;
}
window.onresize = updateSize;
updateSize();

function update(t){
	c.fillStyle = 'rgba(0,0,0,0.1)'
	c.fillRect(0,0,can.width,can.height);
	var x = 0;
	while (x-15 < can.width) {
		function equation(x,t){
			return ((can.height/2)+(Math.sin(x+t/100)*(can.height/6)));
		}
		c.strokeStyle = 'hsl(' + (Math.round(x/5)%360) + ', 50%, 50%)';
		c.beginPath();
		c.moveTo(x-15,equation(x-15,t));
		c.lineTo(x,equation(x,t));
		c.stroke();
		x += 15;
	}
}
var timeFromStart = 0;
var updateInterval = setInterval(() => {
	update(timeFromStart);
	timeFromStart++
}, 10);


})();
