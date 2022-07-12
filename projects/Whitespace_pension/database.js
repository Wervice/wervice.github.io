class database {
    constructor(databaseName, lenght) {
        this.databaseName = databaseName
        this.lenght = localStorage.length
    }

    setItem(name, value) {
        this.lenght = localStorage.length
        localStorage.setItem(btoa(name), btoa(value));
        return true;
    }

    getItem(name) {
        let encoded = localStorage.getItem(btoa(name))
        let decode = atob(encoded)
        if (localStorage.getItem(btoa(name)) == null) {
            decode = null
        }
        else {
            decode = decode
        }
        return decode;
    }

    removeItem(name) {
        localStorage.removeItem(btoa(name))
    }

    dublicateItem(name, resultName) {
        let encoded = localStorage.getItem(btoa(name))
        let decode = atob(encoded)
        localStorage.setItem(btoa(resultName), btoa(decode))
    }

    setPlaceholder(name) {
        let placeholderText = parseInt(Math.random() * Math.pow(10, 10)) + parseInt(Math.random() * Math.pow(10, 10)) + parseInt(Math.random() * Math.pow(10, 10))
        let encodedPlaceholder = btoa(placeholderText)
        localStorage.setItem(btoa(name), encodedPlaceholder)
    }

    clear() {
        localStorage.clear()
    }

    key(name) {
        let res = atob(localStorage.key(btoa(name)))
        return res;
    }
}

window.oncontextmenu = function () {
    return false;
}