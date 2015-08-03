var Data = [];
function Mapping(){
  function loadData(){
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
      Dir = Data[i];
      d = 1;
      while(ca[i].split('=')[1].split('/').length > d){
        mdir = ca[i].split('=')[1].split('/');
        if(Dir = "" || Dir = null){
          Dir += "{" + mdir[d-1] + ":[]}";
          
        }else{
          
        }
        d++;
      }
	}
    return "";
  }
}