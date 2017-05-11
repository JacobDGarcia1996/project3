var answer1;
var answer2;
var answer3;
var answer4;
var yourgame;
var results1;
var results2;
var results3;
var results4;
function gamertag(){
var answer1=document.getElementById('name').value;
setCookie("tag",answer1 + " ",2);
window.location.href="index2.html";
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function fetch()
{
  var result1=getCookie("tag");
  document.getElementById("gamertag").innerHTML=result1;
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
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
function decission(){
var station = document.getElementById("con").checked;
var pc = document.getElementById("desk").checked;

  if (station && pc){
    setCookie("preference",answer2,2);
  window.location.href="index3.html";
  }
  else if (station && !pc){

    setCookie("preference",answer2,2);
    window.location.href="index3.html";
  }
  else if (!station && pc){

    setCookie("preference",answer2,2);
    window.location.href="index3.html";
  }
  else {
    alert('you havent selected anything')
  }
}





function typeogame(){
  var shooters = document.getElementById("shots").checked;
  var ledges = document.getElementById("plats").checked;
  var roleplay = document.getElementById("role").checked;

if (shooters && ledges && roleplay){
  setCookie("Cselection",answer3,2);
window.location.href="index4.html";
}
else if (!shooters && ledges && roleplay) {
  setCookie("Cselection",answer3,2);
window.location.href="index4.html";
}
else if (!shooters && !ledges && roleplay) {
  setCookie("Cselection",answer3,2);
window.location.href="index4.html";
}
else if (!shooters && ledges && !roleplay) {
  setCookie("Cselection",answer3,2);
window.location.href="index4.html";
}
else if (shooters && !ledges && roleplay) {
  setCookie("Cselection",answer3,2);
window.location.href="index4.html";
}
else if (shooters && !ledges && !roleplay) {
  setCookie("Cselection",answer3,2);
window.location.href="index4.html";
}
else if (shooters && ledges && !roleplay) {
  setCookie("Cselection",answer3,2);
window.location.href="index4.html";
}
else{
  alert ('you havent selected anything')
}
