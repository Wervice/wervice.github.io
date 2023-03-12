// Cookies.JS
function cookies_place(name, content, path) {
  if (cookies_enabled == true){
    document.cookie = name+"="+content+"; path="+path;
  }
  else {
    console.error("Can't place cookie. The user doesn't want cookies.")
  }
}
function cookies_read() {
  if (cookies_enabled == true){
    cookies = document.cookies
  }
  else {
    cookies=""
    console.log("Can't read cookie. The user wants to keep the candy.")
  }
  return cookies;
}