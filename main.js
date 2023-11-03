import { $, $all, pthag } from "./lib/c3nnUtil.js";

var colors = ['#c71b1b', '#cd732a', '#cfd941', '#449a31', '#106193']
var linePer = 0.40
var lineAngle = 45

const linesCont = $('#linesCont');

let i = 0
$all('#linesCont .line').forEach((el) => {
	el.css('background', colors[i]);
	
	i++
});

function linesResize(){
	// linesCont.css('top', window.innerHeight*linePer + 'px');
	
	// linesCont.css('width',pthag(window.innerWidth*linesCont.css('--_lineHeight',null,{resolveToNum: true}),window.innerHeight*linePer) + 'px')

	// var lineAngle = toDeg(Math.atan2(window.innerWidth,window.innerHeight));
	
		// console.log(lineAngle);

		linesCont.css('rotate', lineAngle + 180 + 'deg')
}
linesResize();
window.onresize = linesResize;

// console.log(pthag(500,500))
