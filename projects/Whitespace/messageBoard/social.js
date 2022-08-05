window.onload = function () {
    const iframe = document.getElementById('iframe')
}
function EMailBoard() {
    iframe.src = "mail.html"
}

function sendEmail() {
    if (localStorage.getItem("wdesk://mAl/") == null) {
        localStorage.setItem("wdesk://mAl/", "")
    }
    localStorage.setItem("wdesk://mAl/", localStorage.getItem("wdesk://mAl/") + "<option>" + document.getElementById('email').value + "</option>")
    window.open("mailto:" + document.getElementById('email').value + "&subject=" + document.getElementById('subject').value + "&body=" + encodeURIComponent(document.getElementById('mail').value))
}

function sendCryptEmail() {
    if (confirm("Do you want to send a mail to " + document.getElementById('email').value + "?")) {
        pass = prompt("Enter pass / key for the email.")
        window.open("mailto:" + document.getElementById('email').value + "&subject=" + "Encrypted:" + btoa(document.getElementById('subject').value) + "&body=" + encodeURIComponent("Copy and decrypt this mail under https://wervice.github.io/projects/whitespace/messageBoard/decrypt.html : " + btoa(btoa(btoa(btoa(pass + "/" + "Subject: " + document.getElementById('subject').value + "<br>" + document.getElementById('mail').value))))))
    }
}

function cryptedEMail() {
    iframe.src = "cryptmail.html"
}

function decryptEMail() {
    iframe.src = "decrypt.html"
}

function Mail() {
    iframe.src = "letter.html"
}

function PhoneCall() {
    number = prompt("Enter phone number to call.")
    document.getElementById('calllink').href = "tel:" + number
    document.getElementById('calllink').click()
}