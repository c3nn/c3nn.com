const colors = ['#c71b1b', '#d16e1c', '#c9d61b', '#2ea713', '#106193'],
bgColor = "#0c0b09",
height = 0.25,
stripesNum = 5;

const can = document.querySelector('.bottomBarCanvas'),
c = can.getContext('2d');
var isHoveringLinks = false;
if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)||window.innerWidth/window.innerHeight < 0.75){
	document.querySelector('body, body *').onclick = function(){if(isHoveringLinks == true){isHoveringLinks = false;}else{isHoveringLinks = true;}}
	can.style.pointerEvents = 'all';
	var mobileMode = true;
}else{
	const links = document.querySelector('.links, .links *');
	links.onmouseover = function(){isHoveringLinks = true;};
	links.onmouseout = function(){isHoveringLinks = false;};
}
function updateSize(firstTime){
	can.width = window.innerWidth;
	can.height = Math.ceil(window.innerHeight * height);
}
window.onresize = updateSize;
updateSize(true);

function render(aphase, height, onTop){
	const phase = (aphase%(can.width));
	if(onTop != true){c.fillStyle = bgColor;c.fillRect(0,0,can.width,can.height);c.fill();}else{c.clearRect(0,0,can.width,can.height);}
	for (let i = -5; i < stripesNum; i++){
		const element = colors[(i+colors.length)%colors.length];
		c.fillStyle = element;
		c.fillRect(((can.width/stripesNum)*i)+phase, (onTop == true?0:can.height-can.height*height), can.width/stripesNum, can.height*height);
	}
	c.fill();
}

var phaseNum = 0,
addMomentum = 0,
addHeight = 0,
wasOnTop = false,
updateInterval = setInterval(() => {
	if(wasOnTop == false){
		if(addMomentum > 30){
			addHeight += (addHeight > 0.02?addHeight:0.02) * 0.2;
			if(addHeight > 0.97){
				wasOnTop = true;
				if(mobileMode){can.style.pointerEvents = 'none';}
			}
		}else{
			addHeight = addHeight * 0.85;
		}
	}
	else{
		if(isHoveringLinks == true){
			addHeight = addHeight * 0.85;
		}else{
			addHeight += (addHeight > 0.02?addHeight:0.02) * 0.2;
			if(addHeight > 0.97){
				wasOnTop = false;
				if(mobileMode){can.style.pointerEvents = 'all';}
			}
		}
	}
	if(addMomentum > 30){ addMomentum = 30;}
	if(isHoveringLinks == true){
		addMomentum += 5;
	}else{
		addMomentum = addMomentum * 0.97;
	}
	phaseNum += (8+addMomentum)*(can.width/2560);
	render(phaseNum,0.03+addHeight,wasOnTop);
}, 10);
