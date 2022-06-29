document.oncontextmenu = function () {
    return false;
}

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function rnr() {
    val = Math.random() * Math.pow(10, 18)
    return val;
}

function explain() {
    document.getElementById('terminal-out').innerHTML = document.getElementById('terminal-out').innerHTML + "<br><font class='note'>HackCrunch is a <i>Web Terminal Game</i>. This is a CMD prompt. A <i>hacker</i> is going to try to hack you. You have to decide the right command to fight the hacker. It's not real, so if you lose nothing happens. Green highlighted code is remote code from the hacker.<br></font><hr><br>"
}

function beep() {
    var beepsound = new Audio('beep.mp3');
    beepsound.play();
}

var elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function writeLine(content) {
    document.getElementById('terminal-out').innerHTML = document.getElementById('terminal-out').innerHTML + "<br>" + content
}

if (localStorage.getItem('score') == null) {
    localStorage.setItem('score', parseInt("0"))
}

if (localStorage.getItem('files') == null) {
    localStorage.setItem('files', parseInt("100 GB"))
}

async function go() {
    document.getElementById('welcome').hidden = true;
    document.getElementById('terminal-out').innerHTML = "ssh " + rnr() + "<br>password: " + rnr() + "<br>username: Anonymous<br>Connect..."
    await Sleep(1000);
    document.getElementById('terminal-out').innerHTML = "<font class='error'>Connection failed!</font>"
    await Sleep(1000);
    document.getElementById('terminal-out').innerHTML = "Retry... SUCCESS ✅"
    writeLine("Your Files: " + localStorage.getItem('files'))
    await Sleep(2000)
    terminalClear()
    await Sleep(1000)
    writeLine("Check OS...")
    await Sleep(5000);
    writeLine("<font class='warning'>Shell Warning: Somebody tries to shutdown your PC!</font>")
    await Sleep(1000);
    writeLine("<font class='hackerscript'>del C:/program/antivirus.exe<br>shutdown /s</font>")
    await Sleep(1000);
    writeLine("<button onclick='crash()'>ALLOW</button> | <button onclick='blockshut()'>BLOCK</button>")
}

function terminalClear() {
    document.getElementById('terminal-out').innerHTML = ""
}

async function crash() {
    var rpts = 0
    terminalClear()
    await Sleep(2000);
    writeLine('<font class=hackerscript>$ allow full remote /F</font>')
    await Sleep(1000);
    writeLine('<font class=error>reset</font> <br>')
    await Sleep(2967);
    writeLine("Enter BIOS...")
    writeLine("$ search bootable device")
    while (rpts < 10) {
        var rpts = rpts + 1
        writeLine("<font class=error> FATAL: NO BOOTABLE DEVICE FOUND</font>")
        await Sleep(500);
    }
    terminalClear()
    document.getElementById('myweb').style.cursor = "none";
    writeLine("<iframe src=bluescreen.html style=height:5cm;width:90vw;border-width:0px;cursor:none;></iframe> ")
}

async function blockshut() {
    writeLine('[BLOCK - INCOMMING SSH - 1]')
    await Sleep(500);
    writeLine('FIGHT BACK?')
    await Sleep(267);
    writeLine('<button onclick=newanti()>No, get Antivirus. (Shield)</button> | <button onclick=goddos()>Yes, start DDOS atack! (Fight)</button>')
}

async function newanti() {
    writeLine('$ get SuperAntivirus' + rnr() + ".exe")
    await Sleep(5000);
    writeLine('FIGHT BACK!')
    writeLine('DDOS')
    await Sleep(500);
    goddos()
}

async function goddos() {
    var rpts = 0
    writeLine('<font class=synt1>start</font> DDOS.exe 101.011.111')
    await Sleep(100);
    while (rpts < 15) {
        rpts = rpts + 1
        await Sleep(200);
        writeLine('Change IP: ' + rnr() + '<br><font class=synt1>ftp</font> <font class=synt2>send<font class=synt1><font> trash.db')
    }
    writeLine("SUCCESS - You took down one server ✅")
    writeLine("Level 2 🏆")
    writeLine("You got 20 Files!")
    localStorage.setItem('files', parseInt(localStorage.getItem('files')) + parseInt(20))
    sessionStorage.setItem('moves', parseInt(localStorage.getItem('moves')) + parseInt(20))
    level2()
}

async function level2() {
    writeLine("")
    await Sleep(1000);
    writeLine('<font class=warning>Virus: Virus found in System Cernel</font>')
    await Sleep(750);
    writeLine('<font class=error>Error▯▪0▯000000▯▪CAN▯T▪READ▪OperatingSystem▯dll▯▪<br>▯System▪Error</error>')
    await Sleep(250);
    writeLine('<button onclick=fix()>Fix Error & Delete Virus DLL (Repair)</button> | <button onclick=crash()>Unistall All tools (Clear)</button> | <button onclick=del()>Pay (Delete all data)</button>')
}

async function fix() {
    writeLine("<font onclick=error>Problem: 👾 Can't unistall...</font>")
    await Sleep(2000);
    writeLine("SUCCESS: Virus deleted. ✅")
    await Sleep(200)
    writeLine("<font class=error>FAILED: Can't unistall!<br>Unable to start unistaller.bat</font>")
    writeLine("<font class=synt1>start</font> repair.bat")
    await Sleep(3000)
    terminalClear()
    await Sleep(1000)
    writeLine("<font class=warning>Virus found in C:/users</font>")
    await Sleep(500)
    writeLine("<font class=warning>Virus found in C:/system</font>")
    await Sleep(456)
    writeLine("<font class=warning>Virus found in C:/program</font>")
    await Sleep(500)
    writeLine("<font class=warning>Virus found in C:/system/driver</font>")
    await Sleep(489)
    writeLine("<font class=warning>Virus found in C:/system/cmd.exe</font>")
    await Sleep(250)
    writeLine("<font class=warning>Can't load C:/system/network/help.com</font>")
    await Sleep(500)
    writeLine("<font class=warning>Virus found in C:/system/shutdown.bat</font>")
    await Sleep(489)
    writeLine("<font class=warning>Virus found in C:/system/repair-os.com</font>")
    await Sleep(250)
    writeLine("<font class=warning>Can't load C:/system/cernel/dos.com</font>")
    await Sleep(500)
    writeLine("<font class=warning>Virus found in C:/system/bios</font>")
    await Sleep(489)
    writeLine("<font class=warning>Virus found in C:/system/uefi.dos</font>")
    await Sleep(250)
    writeLine("<font class=warning>Can't load C:/system/crash/last-e12.com</font>")
    await Sleep(4000)
    terminalClear()
    await Sleep(100)
    writeLine("<font class=synt1>start</font> repair.doscmd")
    writeLine("taskkil /F vir/*.exe")
    writeLine("taskkil /F vir/*.bat")
    writeLine("taskkil /F vir/*.com")
    writeLine("taskkil /F vir/*.cmd")
    await Sleep(5000)
    terminalClear()
    writeLine("<font class=hackerscript>SUCCESS: Virus deleted<br>Please don't block!<br><button onclick=crash()>Ok, allow remote</button> | <button onclick=crash()>Ok, allow connect</button></font> | <button onclick=endwar()>Block</button>")
}

async function del() {
    localStorage.setItem('files', 0)
    await Sleep(100)
    writeLine("<font class=error>lost all files</font>")
    await Sleep(2000)
    crash()
}

async function endwar() {
    terminalClear()
    writeLine("<font class=synt1>ftp</font> 1.167.254.24")
    var rpts = 0
    while (rpts < 50) {
        var rpts = rpts + 1
        writeLine("<font class=error>pin: " + rnr() + "</font>")
        await Sleep(20)
    }
    writeLine("Ready.")
    await Sleep(1000)
    writeLine("Server Welcome: WELCOME ON 1.167.254.24<br>👽👾<br>Browse <a href=bluescreen.html title=👺👹🤖👾 >viruscode</a> and read our mds.")
    writeLine("<font class=hackerscript>$ chat hacker: hello<br>taskkill /F antivirus<br>start ddos.exe (ipconfig[5])</font>")
    writeLine("Noß")
}