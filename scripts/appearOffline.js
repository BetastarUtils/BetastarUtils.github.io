alert('WARNING: you will not be able to trade with this script enabled')
socket.disconnect()
if (location.pathname === '/stats/' || location.pathname === '/stats') {
  document.getElementById('#userElement').style.filter = 'drop-shadow(0px 0px 100px red)'
}
