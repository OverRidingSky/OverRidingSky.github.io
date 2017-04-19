

//Cookie fuctions from w3schools.com
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function loading(){
	var items = document.getElementsByClassName('loadingText');
	for(var i = 0; i < items.length; i++){
		if(items[i].innerHTML.split('.').length - 1 < 3){
			items[i].innerHTML += '.';
		}else{
			items[i].innerHTML = "Loading";
		}
	}
}
window.onload = function(){
	window.setInterval(loading, 1000);
	var user = "Admin"; /*getCookie("username");*/
	if(user == ""){window.location.replace(window.location.href + "Login/");}
	
}