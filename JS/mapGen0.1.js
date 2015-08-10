loadCookies(){
  ca = document.cookie.split(";");
  temp = "";
  for(i = 0; i < ca.length; i++){
    if(i > 0 ){temp += ",";}
    temp += '{' + ca[i].split("=")[0] + ':"' + ca[i].split("=")[1] + '"}';
  }
  return temp.parseJSON();
}
var data = loadCookies();