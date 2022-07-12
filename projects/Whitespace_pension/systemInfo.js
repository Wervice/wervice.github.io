// Constants
const userAgent = navigator.userAgent
const isTouch = (navigator.maxTouchPoints != 0)

// Classes
class device{
    constructor(os) {
        this.os = ''
    }
    getDeviceAppl() {
        if (userAgent.includes('Safari') && userAgent.includes('Mac')) {
            return ['Mac', 'Safari', 'MacOS'];
        }
        else if (userAgent.includes('Safari') && userAgent.includes('iPhone')) {
            return ['iPhone', 'Safari', 'iOS'];
        }
        else if (userAgent.includes('Safari') && userAgent.includes('iPad')) {
            return ['iPad', 'Safari', 'iOS'];
        }
    }
}