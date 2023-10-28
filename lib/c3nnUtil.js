/* 
* c3nnUtil.js
* Contains super useful fuctions that I sometimes use
* if you somehow find this helpful, you can use if you want just don't expect it to be the same for the rest of time
*/

// quick selector
const $ = function(selector, element = document){return element.querySelector(selector);},
$all = function(selector, element = document){return element.querySelectorAll(selector);};
Element.prototype.$ = function(selector){return $(selector, this);}
Element.prototype.$all = function(selector){return $all(selector, this);}

function css(name, val = null, options = {resolveToNum: false, obj: $(':root')}){
	let obj = (options.obj?options.obj:$(':root'));
	if(val != null){
		obj.style.setProperty(name, val);
	}else{
		let output = getComputedStyle(obj).getPropertyValue(name);
		return (options.resolveToNum?Number(output.delChar(' ').delChar('px').delChar('%').delChar('s')):output);
	}
}
Element.prototype.css = function(name, val = null, options = {resolveToNum: false}){
	let passedOptions = options;
	passedOptions.obj = this;
	css(name, val, passedOptions)
};

// String malipulation
String.prototype.delChar = function(sel){return this.replace(sel,'')};

// Set, get, has, and delete storage types (use filesaver.js if you want)
function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return null;
}
function hasCookie(cname) {
	return (getCookie(cname)?true:false);
}
function deleteCookie(cname){
	if(!hasCookie(cname)){console.warn("cookie, " + cname + ", not found"); return;}
	setCookie(cname, '', 0);
}
function setURLParam(name,value){
	let params = new URLSearchParams(window.location.search);
	params.set(name,value);
	window.location.search = params.toString();
}
function getURLParam(name){
	const params = new URLSearchParams(window.location.search);
	return params.get(name);
}
function hasURLParam(name){
	const params = new URLSearchParams(window.location.search);
	return params.has(name);
}
function deleteURLParam(name){
	const params = new URLSearchParams(window.location.search);
	params.delete(name);
	window.location.search = params.toString();
}
function setURLHash(value){
	location.hash = value;
}
function getURLHash(){
	if(location.hash == ''){return null;}
	return location.hash.replace('#','');
}
function hasURLHash(){
	return (getURLHash() == null?false:true)
}
function deleteURLHash(){
	setURLHash('')
}

// Math
function pthag(a,b){
	return Math.sqrt(a*a + b*b);
}

