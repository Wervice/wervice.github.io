check()

function check() {
    if (localStorage.getItem("MDE=") == null || localStorage.getItem("MDE=") == "NaN") {
        localStorage.setItem("MDE=", 0)
    }

    if (localStorage.getItem("MDI=") == null || localStorage.getItem("MDI=") == "NaN") {
        localStorage.setItem("MDI=", 0)

    }

    if (localStorage.getItem("MzM=") == null || localStorage.getItem("MzM=") == "NaN") {
        localStorage.setItem("MzM=", 0)

    }

    if (localStorage.getItem("NDQ0NA==") == null || localStorage.getItem("NDQ0NA==") == "NaN") {
        localStorage.setItem("NDQ0NA==", 0)

    }

    if (localStorage.getItem("NTU1MQ==") == null || localStorage.getItem("NTU1MQ==") == "NaN") {
        localStorage.setItem("NTU1MQ==", 0)

    }

    if (localStorage.getItem("NTU1$MQ==") == null || localStorage.getItem("NTU1$MQ==") == "NaN") {
        localStorage.setItem("NTU1$MQ==", 0)
    }

    if (parseInt(localStorage.getItem("MzM=")) < 0) {
        document.getElementById('badgebox').style.backgroundColor = "#ec905b";
        setContent("StatusBadge", "Warning: You have less than 0 Euro/USD available.")
    }
    else {
        document.getElementById('badgebox').style.backgroundColor = "#ecd15b";
        setContent("StatusBadge", "You have more than 0 Euro/USD available.")
    }

    if (parseInt(localStorage.getItem("MDI=")) > parseInt(localStorage.getItem("MDE="))) {
        setContent("StatusProfits", "Warning: You make more losses than profits!")
    }
    else {
        setContent("StatusProfits", "You make more profits than losses.")
    }
}

function AddToSales(x) {
    if (money == NaN) {
        console.error("NaN is no valid number!")
    }
    else {
        localStorage.setItem("MDE=", parseInt(parseInt(localStorage.getItem("MDE=")) + x))
        localStorage.setItem("MzM=", parseInt(parseInt(localStorage.getItem("MzM=")) + x))
    }
}

function AddToExpenditures(x) {
    if (money == NaN) {
        console.error("NaN is no valid number!")
    }
    else {
        localStorage.setItem("MDI=", parseInt(parseInt(localStorage.getItem("MDI=")) + x))
        localStorage.setItem("MzM=", parseInt(parseInt(localStorage.getItem("MzM=")) - x))
    }
}

function settings() {
    popout("settings.html", 1)
}

function setData() {
    setContent("sales", localStorage.getItem("MDE="))
    setContent("expen", "-" + localStorage.getItem("MDI="))
    setContent("money", localStorage.getItem("MzM="))
    setContent("colls", localStorage.getItem("NDQ0NA=="))
    setContent("jobsc", localStorage.getItem("NTU1MQ=="))
    setContent("mjobsc", localStorage.getItem("NTU1$MQ=="))
    check()

}

function setColl() {
    money = parseInt(prompt())
    localStorage.setItem("NDQ0NA==", money)
    setData()
}

function sale() {
    money = parseInt(prompt())
    AddToSales(money)
    setData()
}

function expen() {
    money = parseInt(prompt())
    AddToExpenditures(money)
    setData()
}

function setBadge() {
    money = parseInt(prompt())
    if (money == NaN) {
        console.warn("NaN is no valid number!")
    }
    else {
        localStorage.setItem("MzM=", money)
        setData()
    }
}

function setJobs() {
    money = parseInt(prompt())
    if (money == NaN) {
        console.warn("NaN is no valid number!")
    }
    else {
        localStorage.setItem("NTU1MQ==", money)
        setData()
    }
}

function setMJobs() {
    money = parseInt(prompt())
    if (money == NaN) {
        console.warn("NaN is no valid number!")
    }
    else {
        localStorage.setItem("NTU1$MQ==", money)
        setData()
    }
}

function exportasfile() {
    makeFileMIME("Sales:" + encodeURI(localStorage.getItem("MDE=") + " | Expenditures:" + localStorage.getItem("MDI=") + " | Account:" + localStorage.getItem("MzM=")), "utf-8", "application/occet-stream")
}

function cleardata() {
    if (confirm("Do you want to delete all data?") == true) {
        localStorage.removeItem("MzM=")
        localStorage.removeItem("MzM=")
        localStorage.removeItem("MDE=")
        localStorage.removeItem("MDI=")
        localStorage.removeItem("NDQ0NA==")
        localStorage.removeItem("NTU1MQ==")
        localStorage.removeItem("NTU1$MQ==")
        localStorage.removeItem("nts")
        rp()
    }

    else {
    }
}