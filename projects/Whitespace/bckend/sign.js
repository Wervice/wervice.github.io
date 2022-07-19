function newKey() {
    var number = Math.fround(Math.random() * Math.pow(10, 8))
    var b64number = btoa(number)
    return b64number
}

function setGlobalKey() {
    localStorage.setItem("wdesk://security/keys/passsystempath/numbersystemvalue/#08765321!xsyAqReWl@/globalkey/.key_global_1_sec_werviceWhitespace", newKey())
}

function sign(string, sign) {
    return btoa(sign + string)
}

function validate(string, sign) {
    if (!string.includes(sign)) {
        return false;
    }
    else {
        return true;
    }
}

function unsign(string, sign) {
    return atob(string).replace(sign, "")
}

function signLeg(string) {
    return string.length
}