function bullit() {
    document.getElementById('text').value = document.getElementById('text').value+"• "
}

function lb() {
    document.getElementById('text').value = document.getElementById('text').value+"\n"
}

function nls() {
    bullit()
}

function connect() {
    arrow()
}

function table() {
    document.getElementById('text').value += '¦\t¦\t¦\t¦\t¦'
    lb()
    document.getElementById('text').value += '¦\t¦\t¦\t¦\t¦'
    lb()
    document.getElementById('text').value += '¦\t¦\t¦\t¦\t¦'
    lb()
    document.getElementById('text').value += '¦\t¦\t¦\t¦\t¦'
    lb()
    document.getElementById('text').value += '¦\t¦\t¦\t¦\t¦'
    lb()
}