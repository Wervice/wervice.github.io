console.warn("!! This page is using CSjs !! www.Wervice.com/csjs/")

var utf8 = "utf-8";
var b64 = "base64";
var utf16 = "utf-16";
var dos = "cp-347";

//Input
function setInput(id, value) { document.getElementById(id).value = value } //Set Value of an input element
function setInputType(id, type) { document.getElementById(id).type = type } //Set Type of an input element
function gValue(id) { val = document.getElementById(id).value; console.log(val) }

//Content
function setContent(id, content) { document.getElementById(id).innerHTML = content } //Set content of an element

//Style
function setFontWeight(id, weight) { document.getElementById(id).style.fontWeight = weight }  //Set font weight of a text
function setFontSize(id, size) { document.getElementById(id).style.fontSize = size }  //Set font size of a text
function setFontColor(id, color) { document.getElementById(id).style.color = color }  //Set font color of a text
function hideElement(id) { document.getElementById(id).style.visibility = "hidden" }  //Set visibility of an element to false / hide an element
function showElement(id) { document.getElementById(id).style.visibility = "visible" }  //Set visibility of an element to true / show an element
function setAimation(id, name, time) { document.getElementById(id).style.animationName = name; document.getElementById(id).style.animationDuration = time; }  //Set Animation

//Maths
function calcRadiusCircle(size) { result = 2 * size * Math.PI; return result; }  //Calculate the border of a circle
function calcRadiusText(size) { result = 2 * size * Math.PI + "cm"; return result; }  //Calculate the border of a circle in cm
function asPerCent(number) { Percent = number * 100; return Percent; }
function asPerCentDiv(number1, number2) { Percent = (number1 / number2) * 100; return Percent; }
function asPerCentDivRound(number1, number2) { Percent = Math.round((number1 / number2) * 100); return Percent; }
function parallGeoAB(value1, border) { value2 = (border - (value1 * 2)) / 2; return value2; }
function calcBorderSqua(value1, value2) { Border = value1 + value1 + value2 + value2; return Border; }
function calcAreaPara(a, height) { Area = a * height; return Area; }
function calcHeightPara(a, Area) { Height = Area / a; return Height; }
function calcAreaTrin(g, h) { Area = (g * h) / 2; return Area; }
function calcAngleTrin(alpha, beta) { Angel = 180 - (alpha + beta); return Angle; }
function getPi() { pi = '3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647'; return pi; }

//Windows
function popup(src) { window.open(src, '', "width=500,height=500") } //Open a popup
function popout(src, nr) { window.open(src, 'TARGET_' + nr, "width=500,height=500") }  //Open a popup form a popup
function info(text) { alert(text) }  //Show an alert

//Files
function makeFile(content, encoding, filename) { window.open("data:application/octet-stream;name=" + filename + ";" + encoding + "," + content, 'foo') }  //Make file
function makeFileMIME(content, encoding, mime) { window.open("data:" + mime + ";" + encoding + "," + content, 'foo') }  //Make file
function Base64encode(data) { result = btoa(data); console.log(result); return result; }  //Encode a string with Base64
function UTF8encode(data) { result = encodeURI(data); console.log(result); return result; }  //Encode a string as URL
function UserDecode(message) { data = prompt(message); atob(data); result = atob(data); console.log(result); return result; }
function setValue(key, value) { localStorage.setItem(key, value) }
function getValue(key) { value = localStorage.getItem(key) }
function setSession(key, value) { sessionStorage.setItem(key, value) }
function getSession(key, value) { sessionStorage.getItem(key) }
function saveFileinBrowser(filename, data, sheme) { if (sheme == "webdesk") { localStorage.setItem("webdesk:data:" + filename, data); localStorage.setItem("webdesk:filesystem:_", localStorage.getItem("webdesk:filesystem:_") + "<br><button onclick='data = " + data + "; console.log('Opening file.')'>" + "</button>") } else { alert("Invalid sheme!") } }

//DOM
function addElement(tag, name) { obj = document.createElement(tag); document.body.appendChild(obj); obj.id = name }  //Make DOM element

//Images
function setImageSrc(id, src) { document.getElementById(id).src = src }  //Set image source
function setImageSize(id, height, width) { document.getElementById(id).height = height; document.getElementById(id).width = width; }  //Set Image Size

//Browser
function startDark() { document.getElementById("body").style.color = "#ffffff"; document.getElementById("body").style.backgroundColor = "#000000"; document.getElementById("body").style.backgroundImage = "url(/)"; }  //Enable Darkmode

//Device
function device() { if (navigator.userAgent.match("Android") || (navigator.userAgent.match("Macintosh") && navigator.maxTouchPoints > 0) || navigator.userAgent.match("iOS") || navigator.userAgent.match("iPhone") || navigator.userAgent.match("iPad") || navigator.userAgent.match("BlackBerry") || navigator.userAgent.match("iPod") && navigator.maxTouchPoints > 0) { mobile = true; console.log("Is mobile device: <TRUE>") } else { mobile = false; console.log("Is mobile device. <FALSE>"); return mobile; } }  //Mobile/Or not?
function isOnline() { online = navigator.onLine }
function onlineAlert(message) { if (navigator.onLine = false) { alert(message) } }

//Website
function rp(cache) { location.reload(cache) }
function cache() { location.reload(false) }
function rpdecide() { rp(navigator.onLine) }
function openBlankPage() { location.replace("about:blank") }
function homepage() { location.replace(location.protocol + "//" + location.host) }
function linkto(link, hidden) { if (hidden) { stop(); location.replace(link) } else { stop(); location.assign(link) } }

//Own
function runos() { window.open("../run.html", "", "top=100,left=200,height=150,width=450") }
function lorem() { return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In eu mi bibendum neque egestas congue. Risus sed vulputate odio ut enim blandit volutpat. Ligula ullamcorper malesuada proin libero. Integer malesuada nunc vel risus. Tristique sollicitudin nibh sit amet commodo nulla. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Ultrices dui sapien eget mi proin sed libero enim. Sit amet nisl purus in. Ornare arcu odio ut sem nulla pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In eu mi bibendum neque egestas congue. Risus sed vulputate odio ut enim blandit volutpat. Ligula ullamcorper malesuada proin libero. Integer malesuada nunc vel risus. Tristique sollicitudin nibh sit amet commodo nulla. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Ultrices dui sapien eget mi proin sed libero enim. Sit amet nisl purus in. Ornare arcu odio ut sem nulla pharetra.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In eu mi bibendum neque egestas congue. Risus sed vulputate odio ut enim blandit volutpat. Ligula ullamcorper malesuada proin libero. Integer malesuada nunc vel risus. Tristique sollicitudin nibh sit amet commodo nulla. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Ultrices dui sapien eget mi proin sed libero enim. Sit amet nisl purus in. Ornare arcu odio ut sem nulla pharetra."; }
function mistake() {
    var audio = new Audio('error.png');
    audio.play();
}
function sublogexdelrun() {
    localStorage.clear()
    sessionStorage.clear()
    window.top.location.reload()
}

function getDMY() {
    var d = new Date()
    var dmy = d.getDay() + '.' + d.getMonth() + '.' + d.getFullYear()
    return dmy;
}