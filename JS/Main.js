pageSetup(){//intended to be used on page loaded.
	setTimeout(function(){marginFix ()},100);
}
marginFix(){
	if(typeof document.getElementById("TopFix") != "undefined"){document.body.style.marginTop = "32px";}
	if(typeof document.getElementById("BotFix") != "undefined"){document.body.style.marginBottom = "32px";}
}
