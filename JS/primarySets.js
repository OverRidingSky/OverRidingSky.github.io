function cookie(){return true;}
function cookie.get(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

function cookie.check(name) {
  var user = getCookie(name);
  if (user != "") {
    return true;
  }else{
    return false;
  }
}
function cookie.set(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
function cookie.del(name){
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}
}
function setSkin(name){
  if(name == null || name == ""){
    console.log("You're doing it wrong. type 'setSkin.help();'");
  }else{
    list = ["map/maplvl1","map/maplvl2","map/maplvl3"];
    for(i=0;i < list.length;i++){
      if(cookie.check(list[i])){
        cookie.del(list[i]);
      }
      cookie.set(list[i], "http://overridingsky.github.io/Images/Skins/" + name + "/" + list[i] + ".jpg", 365);
    }
  }
}
function setSkin.help(){
//log the help.
}

