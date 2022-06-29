// Stamp a secure application via sessionStorage OneWay Ticket with deadline 5000

function stamp(application, deadline, assign) {
    var stamp_clear = Date.now() + deadline
    sessionStorage.setItem("whsp://temp/stamp#" + application, stamp_clear)
    var url_string = location.href
    var url = new URL(url_string)
    var url_password_64 = url.searchParams.get("password")
    location.href = assign+"?password="+url_password_64
}

function restamp(application, frame) {
    if (sessionStorage.getItem("whsp://temp/stamp#" + application) > Date.now()) {
        console.log(sessionStorage.getItem("whsp://temp/stamp#"+application))
        sessionStorage.removeItem("whsp://temp/stamp#" + application)
        document.getElementById(frame).hidden = false
    }
    else {
        console.warn("Wrong Stamp")
        document.getElementById(frame).hidden = true
        location.replace(history.back())
    }
}

function callSettings() {
    stamp("settings", 5000, "./settings/index.html")
}

function unstampSettings() {
    restamp("settings", "settings")
}

function callWriter() {
    stamp("writer", 5000, "./writer/index.html")
}

function unstampWriter() {
    restamp("writer", "writer")
}

function callDesktop() {
    stamp("desktop", 5000, "../desktop.html")
}

function unstampDesktop() {
    restamp("desktop", "desktop")
}