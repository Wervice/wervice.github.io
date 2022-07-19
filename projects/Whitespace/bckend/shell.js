function echo(text) {
    return text;
}

function whoami() {
    return atob(localStorage.getItem('unlkeuse'))
}

function start(appname) {
    location.replace("../"+appname+"/index.html")
}

function version() {
    return "Whitespace by Wervice v1"
}

function update() {
    window.top.location.reload(true)
}

function time() {
    const date = new Date
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function logout() {
    window.top.location.reload()
}