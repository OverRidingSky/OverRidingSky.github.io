function getScreenSize(){
	var w = document.getElementById('crossBorders').offsetWidth;
	var h = document.getElementById('crossBorders').offsetHeight;
	return [
		w,
		h
	];
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
