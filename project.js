var answer1;
var answer2;
var answer3;
var answer4;
function gamertag(){
var answer1=document.getElementById('name').value;
setCookie("tag",answer1,2);
window.location.href="index2.html";
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date(5);
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
var yourgame
