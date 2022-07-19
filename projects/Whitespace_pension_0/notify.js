function notify(text, title) {
    if (!("Notification" in window)) {
        var useAlert = true
    }
    else if (Notification.permission === "granted") {
        var notification = new Notification(text, title);
    }

    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                var notification = new Notification(text, title);
            }
        });
    }
}