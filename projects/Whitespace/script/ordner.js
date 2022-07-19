function bullit() {
    document.getElementById('text').value = document.getElementById('text').value+"• "
}

function lb() {
    document.getElementById('text').value = document.getElementById('text').value+"\n"
}

function arrow() {
    document.getElementById('text').value = document.getElementById('text').value+"⇨"
}

function nls() {
    bullit()
}

function connect() {
    arrow()
}

function table() {
    document.getElementById('text').value = document.getElementById('text').value + "---- ---- ---- ----"
    lb()
    document.getElementById('text').value = document.getElementById('text').value + "---- ---- ---- ----"
    lb()
}