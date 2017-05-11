var answer1;
var answer2;
var answer3;
var answer4;
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
}

function subtype(){
  var answer4=document.getElementById('subc').value;
  var scar= document.getElementById("scare").checked;
  var brain= document.getElementById("stuck").checked;
  var future= document.getElementById("sci").checked;
var past= document.getElementById("mmo").checked;
var long= document.getElementById("quest").checked;

  if(scar && brain && future  && past && long){
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  }
  else if (!scar && brain && future  && past && long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  }
  else if (scar && !brain && future  && past && long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  }
  else if(scar && brain && !future  && past && long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  }
  else if(scar && brain && future  && !past && long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  }
  else if(scar && brain && future  && past && !long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  }
  else if(!scar && !brain && future  && past && long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
}
  else if(!scar && brain && !future && past && long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  } else if(!scar && brain && future  && !past && long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  }
  else if(!scar && brain && future  && past && !long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  }
  else if(!scar && !brain && !future  && past && long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  } else if(!scar && !brain && future  && !past && long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  }
  else if(!scar && !brain && future  && past && !long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  }
  else if(!scar && !brain && !future  && !past && long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  }
  else if(!scar && !brain && !future  && past && !long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  }
  else if(!scar && !brain && future  && !past && !long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  }
  else if(!scar && brain && !future  && !past && !long) {
    setCookie("subc",answer4,2);
    window.location.href="results.html";
  }
  else if(scar && !brain && !future  && !past && !long) {
    setCookie("subc",answer4,2);
    window.location.href="results.html";
  }
  else if(scar && brain && !future  && !past && !long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  }
  else if(scar && !brain && future  && !past && !long) {
    setCookie("subc",answer4,2);
    window.location.href="results.html";
  }
  else if(scar && !brain && !future  && past && !long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  }
  else if(scar && !brain && !future  && !past && long) {
    setCookie("subc",answer4,2);
  window.location.href="results.html";
  }
   else if(scar && brain && future  && !past && !long) {
    setCookie("subc",answer4,2);
    window.location.href="results.html";
  }
  else if(scar && brain && !future  && !past && long) {
    setCookie("subc",answer4,2);
    window.location.href="results.html";
  }
  else if(scar && brain && !future  && past && !long) {
    setCookie("subc",answer4,2);
    window.location.href="results.html"
  }
  else{
    alert ('you havent selected anything')
  }

}
function reslutrin(){
  var answer2=document.getElementById('name').value;
  var asnwer3 document.getElementById('name').value;
  var answer4 =document.getElementById('name').value;
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
function sugestions()
{
  var result2 = getCookie('preference')
   document.getElementById("2nd").innerhtml=result2
  var result3 = getCookie('Cselection')
  document.getElementById("3rd").innerhtml=result3
  var result4 = getCookie('subc')
  document.getElementById("4th").innerhtml=result4
}

var consoles [consol:mmo: "GTA, Destiny",rpg: "Skyrim, Dragon Age",fps/tps: " Call of duty, Mass Effect",Desktop:mmo: "World of Warcraft, Runescape" rpg: "Skyrim, Sims" fps/tps:"C.S.G.O, Ghost in a shell"]
