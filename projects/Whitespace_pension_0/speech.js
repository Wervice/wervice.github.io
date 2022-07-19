// Constants
const utterance = new SpeechSynthesisUtterance();
const versionnr = 1.0
const phrases2 = ['Ok, anything else?', 'Ok, do you need something else?', 'Can I help you again?', 'Have you got a question for me?', 'Ok, can I help you again?']
const phrases3 = ['You\'re welcome', 'You are welcome']
const microicon = document.getElementById('microicon')

t = 0

// Version
function speechVersion() {
    console.info(`Speech ${versionnr}`)
}

// Events
utterance.onerror = function () {
    console.error('Speech: Error: ' + utterance.text)
}
// Speak

function configLang(lang) {
    utterance.voice = window.speechSynthesis.getVoices()[35]
    utterance.lang = lang
    console.info('Speech: Lang=' + lang)
}

function configSpeed(speed) {
    utterance.voice = window.speechSynthesis.getVoices()[35]
    utterance.rate = speed
    console.info('Speech: Speed=' + speed)

}

function say(text) {
    utterance.voice = window.speechSynthesis.getVoices()[35]
    /*
    utterance.text = text
    console.info('Speech: Text=' + text)
    window.speechSynthesis.speak(utterance)
    */
    utterance.text = text;
    console.info('Speech: New Text added: ' + text)
    window.speechSynthesis.speak(utterance)
    console.info(`Speech say: ${utterance.text.replaceAll('undefined', 'Oh, wait, let me think.')};`)
    speechVersion()
}

function battery() {
    navigator.getBattery().then(function (battery) {

        var level = battery.level;

        say(
            `Your battery has up to ${Math.floor(level * 100)} %. ` + phrases2[getRandomNumber(5, 1, false)]
        )
    });
}

function charging() {
    navigator.getBattery().then(function (battery) {
        say(
            ((battery.charging) ? "Yes, your battery is charging. " : "No, your battery isn\'t charging. ") + phrases2[getRandomNumber(5, 1, false)]
        )
    });
}

configLang('en')

// Recognition
function runSpeechRecognition() {
    if (sessionStorage.getItem('Bye') != "false") {
    const recognition = new webkitSpeechRecognition()
    recognition.continous = true
    recognition.lang = 'en'

    recognition.onresult = function (event) {
        var results = event.results;
        var firstResult = results[0];
        var firstAlt = firstResult[0];
        var transcript = firstAlt.transcript;
        console.info(`STT: ${transcript}`);
        svar('transcript', transcript, 'set');
        window.speechresult = transcript;
        /* Assistant */
        const clock = new Date()
        if (transcript.includes('time')) { // Time
            say(
                `It\'s ${clock.getHours() + " " + clock.getMinutes()} o\'clock` + ". " + phrases2[getRandomNumber(5, 1, false)]
            )
        }
        else if ((transcript.includes('battery') || transcript.includes('Battery')) && (transcript.includes('much') && transcript.includes('charged') && !transcript.includes('charging'))) {
            battery()
        }
        else if (transcript.includes('charg')) {
            charging()
        }
        else if (transcript.includes('Thank you') || transcript.includes('thank you') || transcript.includes('No')) {// Thank you
            say(
                phrases3[getRandomNumber(2, 1, false)]
            )
            sessionStorage.setItem('Bye', false)
            say(
                'Bye.'
            )
        }
        else if (transcript.includes('date') || transcript.includes('today')) {
            say(
                `The today's date is ${clock.getDate() + "." + clock.getMonth() + "." + clock.getFullYear()}`
            )
        }
        else if (transcript.includes('Bye')) {
            sessionStorage.setItem('Bye', false)
            say(
                'Bye.'
            )
        }
        else {
            say(
                'I am sorry, what did you say? May you repeat? Or say Bye, please.'
            )
        }
        /* Assistant end */

    }
    recognition.start()
        console.info('STT: Go!')
    }
}
// After load
console.info(`Speech: settings=voice:${utterance.voice};lang:${utterance.lang}`)