// This is my updated appearOffline.js

alert('Script coded by zastix.\nFor more scripts, visit\nhttps://betastarutils.github.io/')

var scriptconfirm = confirm("WARNING: you will not be able to trade or chat with this script enabled! Click Cancel to stop the script.");
    if (scriptconfirm == true) {
        alert("You are now offline.");
        socket.disconnect()
        if (location.pathname === '/stats/' || location.pathname === '/stats') {
        document.getElementById('#userElement').style.filter = 'drop-shadow(0px 0px 100px red)'
        }
    } 
    else {
        alert("You are NOT offine.");
    }
