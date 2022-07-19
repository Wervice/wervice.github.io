function getRandomNumber(max, min, dezimalNumber) {
    if (max < min) {
        console.error("Logical: RandomNR: max<min")
    }
    if (max == min) {
        console.warn("Logical: RandomNR: max=min")
    }
    let base = Math.random() * (max - min) + min
    if (dezimalNumber == false) {
        base = Math.floor(base)
    }
    let res = base
    return res
}

function div(a, b) {
    let calced = a / b
    return calced
}

function svar(name, value, setget) {
    if (setget == 'set') {
        // Set variable
        sessionStorage.setItem(name, value)
        varresult = true
    }
    else if (setget == 'get') {
        // Get variable
        varresult = sessionStorage.getItem(name)
    }
    else {
        console.error(`Logical: \"${setget}\" is not a valid value for setget`)
    }
    return varresult;
}