let i = 0

function addPopup(titel, content) {
    i++
    let PopupCode = "<div class=\"popup\" id=\"popup" + i + "\"><font class=\"popuptitle\" id=\"popuptitle" + i + "\">" + titel + "</font><br><hr style=border-color:grey;border-style:solid;><div>" + content + "</div></div>"
    document.writeln(PopupCode)
}

function hidePopup(id) {
    document.getElementById("popup"+id).hidden = true
}

function deletePopup(id) {
    document.getElementById("popup"+id).remove()
}