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
		hFix = h-1024;
		var marTop, marBot;
		while(hFix > 0){
			marTop++;
			hFix--;
			marBot++;
			hFix--;
		}
		document.getElementById('crossBorders').style.marginTop = marTop+"px";
	}
}

window.onresize = function(){
	fixHeight();
}
