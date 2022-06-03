<div id="top"></div>
<br />
<div align="center">
  <a href="https://betastar.org">
    <img src="https://VillainsRule2000.github.io/Betastar/images/logo.png" alt="Logo" width="300" height="300">
  </a>
  <h1 align="center">Betastar Scripts</h1>

  <p align="center">
    <a href="https://github.com/VillainsRule2000/Betastar/issues">Report an Issue</a>
  </p>
</div>
<div id="top"></div>
<br />
<div align="center">
  <h3 align="center">Using a Script</h3>

  <p align="center">
    1. Find the script you want below.<br>
    2. Copy the script to your clipboard.<br>
    3. Open <a href="https://betastar.org">Betastar</a>.<br>
    4. Use Control/Command + Shift + J.<br>
    5. A window should pop up. Paste the script in where it has a <b>></b> symbol.<br>
    6. Follow any instructions (in popups) on the Betastar page.
  </p>
</div>
<br>
<br>
<br>
<br>
<div id="top"></div>
<br />
<div align="center">
  <img src="https://VillainsRule2000.github.io/Betastar/images/spaceTerminal.png" alt="Logo" width="200" height="200">
  <h3 align="center">Appear Offline</h3>

  <p align="center">
    Appear Offline at any time.<br>
    WARNING: This disables trading.
  </p>
</div>

```js
alert('Script coded by Zastix, Betastar tester\nFor more scripts, visit\nhttps://villainsrule2000.github.io/Betastar/')
alert('WARNING: you will not be able to trade with this script enabled')
socket.disconnect()
if (location.pathname === '/stats/' || location.pathname === '/stats') {
  document.getElementById('#userElement').style.filter = 'drop-shadow(0px 0px 100px red)'
}
```
<br>
<div id="top"></div>
<br />
<div align="center">
  <img src="https://VillainsRule2000.github.io/Betastar/images/sellElement.png" alt="Logo" width="200" height="90">
  <h3 align="center">Chat Spammer</h3>

  <p align="center">
    Spams the chat with "free atoms", then a decimal.<br>
    You may be muted or banned, I wouldn't try it,
  </p>
</div>

```js
setInterval(()=>{ socket.emit('smes', `free atoms | ${Math.random()}`) })
```
<br>
<div id="top"></div>
<br />
<div align="center">
  <img src="https://VillainsRule2000.github.io/Betastar/images/sellElement.png" alt="Logo" width="200" height="90">
  <h3 align="center">Sell Duplicate Elements</h3>

  <p align="center">
    Sell all your duplicate Elements, automatically.<br>
    WARNING: there is no way to make an exception for certain elements and there is no warning message.
  </p>
</div>

```js
alert('Script coded by Zastix, Betastar tester\nFor more scripts, visit\nhttps://villainsrule2000.github.io/Betastar/')

$.get('/api/user/elements', function(data) {
    userElements = JSON.parse(data)
    Object.keys(elementList).forEach(element => sell(element))
})
async function sell(element) {
    var amt = userElements[element] - 0
    if (0 >= amt) return;
    var postData = `element=${element}&quantity=${amt}`;
    $.post(`/api/sell/`, postData, function() {
        if (isNaN(amt)) return;
        else console.log(`Sold ${amt} ${element}(s)`);
    })
}
```
<br>
<div id="top"></div>
<br />
<div align="center">
  <img src="https://VillainsRule2000.github.io/Betastar/images/spamCrates.png" alt="Logo" width="110" height="300">
  <h3 align="center">Spam Open Crates</h3>

  <p align="center">
    Spam open ANY CRATE!<br>
    Very simple:<br>
    1. Type in a crate name from a list.<br>
    2. Type in the quantity.<br>
    3. Enjoy your elements!
  </p>
</div>

```js
alert('Script coded by Zastix, Betastar tester\nFor more scripts, visit\nhttps://villainsrule2000.github.io/Betastar/')

var i = 0;
var boxes = []
colors = {
    divine: '#ee82ee',
    mythical: '#a335ee',
    perfect: '#fffacd',
    fabled: '#0c7500',
    legendary: '#ff910f',
    epic: '#be0000',
    rare: '#0a14fa',
    uncommon: '#4bc22e',
    common: '#ffffff'
}
Object.keys(cratesList).forEach(e => {
    boxes.push(e)
})
var name = prompt("Which crate would you like to open?\n\nOptions:\n" + boxes.join('\n'));
if (!boxes.includes(name)) {
    alert('That crate doesn\'t exist...')
    name = prompt("Which crate would you like to open?\n\nOptions:\n" + boxes.join('\n'));
}
var amt = Number(prompt("How many crates would you like to open?\ntype \"*\" to unlock all you can with your current atoms."));
if (isNaN(amt)) amt = 99999999999999
function buyBox() {
    $.post('/api/open/', `crate=${name}`, function(data) {
        try {
            if (data === "You're being rate limited.") i--
            else {
                rarity = elementList[data]['rarity'].toLowerCase()
                console.log('%c%s', `color: ${colors[rarity]}; font-size: 25px; text-shadow: 0px 0px 15px ${colors[rarity]};`, `${data}`);
            }
        } catch (e) {
            i = amt
        }
    });
}
var check = setInterval(() => {
    if (i < amt) {
        buyBox();
        i++;
    } else {
        clearInterval(check);
        alert("Done buying boxes! Check the console or the Elements page.");
    }
}, 751);
```
<br>
<div id="top"></div>
<br />
<div align="center">
  <img src="https://VillainsRule2000.github.io/Betastar/images/allElements.png" alt="Logo" width="500" height="250">
  <h3 align="center">Spoof Elements</h3>

  <p align="center">
    Spoof every Element in the game!
  </p>
</div>

```js
alert('Script coded by Zastix, Betastar tester\nFor more scripts, visit\nhttps://villainsrule2000.github.io/Betastar/')

Array.from(document.getElementById('#elementList').children).forEach(a => a.remove())
Object.entries(elementList).forEach((entry) => {
	const [key, value] = entry;
	$(`<img id="${key}" src="${elementList[key].imageURL}" onclick="viewElement('${key}')" class="bottomElement">`).appendTo(".elementList");
})
for (i=0;i<Object.keys(elementList).length;i++) {
    elemes = Object.keys(elementList)
    if (elemes[i] === 'nigger') userElements[elemes[i]] = Math.floor(Math.random() * 4);
    else userElements[elemes[i]] = Math.floor(elementList[elemes[i]]['chance'] / 2 + Math.round(Math.random() * 20));
}
```
<br>
<br>
<br>
<br>
<div id="top"></div>
<br />
<div align="center">
  <a href="https://github.com/notzastix/blacket-hacks">
    <img src="https://VillainsRule2000.github.io/Betastar/images/diamondGift.png" alt="Logo" width="190" height="200">
  </a>
  <h3 align="center">Script Credits</h3>

  <p align="center">
    Credit to <b>@notzastix</b>.
  </p>
</div>
