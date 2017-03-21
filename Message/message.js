var EndingText = "This is the text that shows up after the timer is done...";
var TickID;
var numOfIntervals = 0;
function changeSize(){
	document.getElementsByClassName("LoadingCircle")[0].className = "LoadingCircleT";
	document.getElementsByClassName("inner")[0].className = "innerT1";
	window.setTimeout(function(){
		document.getElementsByClassName("LoadingCircleT")[0].style.animation = "none";
		document.getElementsByClassName("LoadingCircleT")[0].style.background = "#4B0082";
		document.getElementsByClassName("innerT1")[0].className = "innerT2";
		},1125);
	clearInterval(TickID);
	document.getElementsByTagName("p")[0].innerHTML = EndingText;
}
window.onload = function() {
	window.setTimeout(changeSize,8000);
	document.getElementsByClassName("LoadingCircle")[0].getElementsByClassName("inner")[0].getElementsByTagName("p")[0].innerHTML = (8 - numOfIntervals).toString(); numOfIntervals++;
	TickID = setInterval(function(){
		document.getElementsByClassName("LoadingCircle")[0].getElementsByClassName("inner")[0].getElementsByTagName("p")[0].innerHTML = (8 - numOfIntervals).toString(); numOfIntervals++;}, 1000);
}