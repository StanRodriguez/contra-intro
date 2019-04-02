x = -800;

var wrapper =document.getElementById('wrapper');
var player =document.getElementById('player');

var center = setInterval(moveCenter, 0.5);
var blink;
function moveCenter() {
	// body...
	if (x==250) {
		clearInterval(center);
		var audio = document.getElementById('introMusic');
		audio.play();
	}
	else{
		x++;
		wrapper.style.left = x+"px";
	}
}
function makeBlink() {
	// body...
	if (player.style.visibility == 'hidden') {
		player.style.visibility = 'visible';
	}else {
		player.style.visibility = 'hidden';
	}
}
function blinkInterval() {
	// body...
	 blink = setInterval(makeBlink, 150);
}