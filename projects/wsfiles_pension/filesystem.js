var id = 'wsf://'
var ilwpath = 'wsf://interlineword/'
var ilwindex = 'wsf://interlineword/index.sys'


function get_ilw_files() {
    var index = localStorage.getItem(ilwindex)
    return index;
}

function wsfdelilw(fname) {
    localStorage.removeItem('wsf://interlineword/'+fname+'.itw')
    localStorage.setItem('wsf://interlineword/index.sys', localStorage.getItem('wsf://interlineword/index.sys').replaceAll('<button onclick=openlistilt("' + fname + '") class=filebutton>' + fname + '.itw</button><img src=delete.png height=12 onclick=wsfdelilw(\''+fname+'\')><br>', ''))
    location.reload()
}

function openlistilt(fname) {
    window.open('../interlineword/index.html?value='+fname)
}