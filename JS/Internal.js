function getScreenSize(){
	var width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;
	
	var height = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	return [
		width,
		height
	];
}

function fixHeight(){
	h = getScreenSize()[1];
	if(h > 1024){
		hFix = ceil((h-1024)/2);
		document.getElementById('crossBorders').style.marginTop = hFix + "px";
	}
}

window.onresize = function(){
	fixHeight();
}
