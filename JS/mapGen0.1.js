//Lame inforced loader (doesn't even use cookies sadly)
function loadCookies(){
  return '{"Map":{"Tiles":{"Grass":"http://overridingsky.github.io/Images/Skins/Original0.1/Map/Tiles/Grass.png","Gravel":"http://overridingsky.github.io/Images/Skins/Original0.1/Map/Tiles/Gravel.png"},"baseHouse":"http://overridingsky.github.io/Images/Skins/Original0.1/Map/baseHouse.png"}}'
}
//Wip Loader! Would be the best cusomization when this gets up and running!
//function loadCookies(){
//  ca = document.cookie.split(";");
//  temp = "";
//  for(i = 0; i < ca.length; i++){
//    if(i > 0 ){temp += ",";}
//    temp += '{' + ca[i].split("=")[0] + ':"' + ca[i].split("=")[1] + '"}';
//  }
//  return JSON.parse(temp);
//}
var data = loadCookies();