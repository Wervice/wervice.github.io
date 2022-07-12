const sessionkey = Math.round(Math.random*Math.pow(10, 19))

function getCharacterCode(char) {
    return char.charCodeAt(0);
}

function getCharacter(code) {
    return String.fromCharCode(code)
}

//Password security
function encode(string, key) {
    ecca = ""
    i = 0
    while (i != string.length) {
        cc = string.charCodeAt(i)
        ecc = Math.abs(Math.pow(((Math.pow(cc, 2)-key)*1), 2)-key)
        ecca = ecca + parseInt(ecc)
        i++
    }
    return ecca
}

function encodePass(pass) {
    if (pass.length < 6) {
        encerr = false
    }
    else {
        encerr = true
    }
    encoded = encode(pass, (pass.charCodeAt(0) + pass.charCodeAt(1)) * (pass.charCodeAt(2) + pass.charCodeAt(3) * (pass.charCodeAt(4) + pass.charCodeAt(5)))) // More options!!
    return btoa(encoded)
}

//tbk security
function tencode(string, key) {
    tecca = ""
    ti = 0
    while (ti != string.length) {
        tcc = string.charCodeAt(i)
        tecc = Math.abs(Math.pow(((Math.pow(tcc, 2) - key*5) * 2), 3) + key)
        tecca = tecca + parseInt(tecc)
        ti++
    }
    return tecca
}

function tencodePass(pass) {
    if (pass.length < 6) {
        tencerr = false
    }
    else {
        tencerr = true
    }
    tencoded = tencode(pass, (pass.charCodeAt(0) + pass.charCodeAt(1)) * (pass.charCodeAt(2) + pass.charCodeAt(3) * (pass.charCodeAt(4) + pass.charCodeAt(5)))) // More options!!
    return btoa(tencoded)
}