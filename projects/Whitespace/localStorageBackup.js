function allStorage() {
    boxed = ""
    for (let i=0, iC=localStorage.length; i<iC; ++i) {
        let storageKey = localStorage.key(i);
        console.log(storageKey + ' : ' + localStorage.getItem(storageKey));
        if (localStorage.getItem(storageKey) == 'NThGQ0U0Q0ZCQUZDN0FERDAxNDk5NkVDRjdGQTBDNTI4Mzc0NDlDQUUwNTdEMjVGQjhFRUUyQThDNkNFRkQ1RDQyQTBGQzFCRkE3NDg5NTUyMjNBRTU5ODVGQTdCNDFDNEIwODY5NzFFRjkzNDkyNTA4MDIzMEFGRTNBMkYzOEQ=') {
            storageKey = null
        }
        var boxed = boxed + "<br>" + atob(storageKey) + ' : ' + localStorage.getItem(storageKey) + "<br>"
    }

    return boxed;
}

const items = allStorage()

function makeFile(content, encoding, filename) { window.open("data:text/rtf;name=" + filename + ";" + encoding + "," + content, 'foo') }  // Make file

function nameButton() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var docs = "<html><head><title>Backup from " + Date() + "</title><style>body { font-family: sans-serif }</style></head><body>Backup:" + Date.now() + "<br><br>Username: " + localStorage.getItem("whsp://username.config") + "<br>PasswordHash: " + localStorage.getItem("whsp://password.config") + "<br>Finances Quick (Decoded): " + atob(localStorage.getItem("whsp://quick/finances")) + "<br><font>ReadyData Decoded</font>: " + atob(localStorage.getItem("whsp://quick/importantData")) + "<hr style=border-color:black;border-style:solid;><br>All data<br>"+allStorage()+"<br><body></html>"
    document.getElementById("buttonNamer").href = "data:text/plain;base64," + btoa(docs)
    document.getElementById("buttonNamer").download = "backup_" + date + "_" + Date.now() + ".html"
}