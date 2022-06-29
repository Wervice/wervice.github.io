// User's informations
class database {
    constructor(databaseName) {
        this.databaseName = databaseName
    }

    setItem(name, value) {
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
        let res = localStorage.key(btoa(name))
        return res;
    }
}

const systemStorage = new database()

const username = systemStorage.getItem(
    'whsp://username.config'
)
const nickname = systemStorage.getItem('pa://nickname')

// Phrases
const phrases1 = ['How can I help you?', 'How may I help you?', 'What do you need?', 'What\'s your question?']

// Dialouges
function dialouge(nr) {
    if (nr == 1) {
        let answer = runSpeechRecognition()
        return answer;
    }
}

// On assistant launch
i = null
function assistant() { // Launch assistant
    sessionStorage.setItem('Bye', true)
    utterance.voice = window.speechSynthesis.getVoices()[35]
    say(
        `Hello ${(nickname == undefined) ? username : nickname}` + ". " + phrases1[getRandomNumber(4, 1, false)] // Greeting
    )
    utterance.onend = function () {
        if (sessionStorage.getItem('Bye') != false) {
            runSpeechRecognition()
        }
    }
}