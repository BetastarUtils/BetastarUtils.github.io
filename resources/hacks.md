<div id="top"></div>
<br />
<div align="center">
  <a href="https://betastar.org">
    <img src="/assets/siteLogo.png" alt="Logo" width="300" height="300">
  </a>
  <h1 align="center">Betastar Hacks</h1>

  <p align="center">
    <a href="https://github.com/BetastarUtils/BetastarUtils.github.io/issues">Report an Issue</a>
  </p>
</div>
<div id="top"></div>
<br />
<div align="center">
  <h3 align="center">Using a Hack</h3>

  <p align="center">
    1. Find the hack you want below.<br>
    2. Copy the hack to your clipboard.<br>
    3. Open <a href="https://betastar.org">Betastar</a>.<br>
    4. Delete EVERYTHING in the search bar.<br>
    5. Add the keyword  "<b>javascript:</b>"  .
    6. Paste the script, and click enter.
    7. Follow any instructions (in popups) on the Betastar page.
  </p>
</div>
<br>
<br>
<br>
<br>
<div id="top"></div>
<br />
<div align="center">
  <img src="/assets/space.png" alt="Logo" width="200" height="200">
  <h3 align="center">Appear Offline</h3>

  <p align="center">
    Appear Offline at any time.
  </p>
</div>

```js
var _0x198ee3=_0x174e;(function(_0x2efb97,_0x1df5a0){var _0x391dd4=_0x174e,_0x42011c=_0x2efb97();while(!![]){try{var _0x2f4a9d=-parseInt(_0x391dd4(0x116))/0x1*(parseInt(_0x391dd4(0x107))/0x2)+-parseInt(_0x391dd4(0x10f))/0x3+parseInt(_0x391dd4(0x10b))/0x4+-parseInt(_0x391dd4(0x110))/0x5+parseInt(_0x391dd4(0x10e))/0x6+-parseInt(_0x391dd4(0x115))/0x7+parseInt(_0x391dd4(0x108))/0x8;if(_0x2f4a9d===_0x1df5a0)break;else _0x42011c['push'](_0x42011c['shift']());}catch(_0x170189){_0x42011c['push'](_0x42011c['shift']());}}}(_0x38b7,0xc2b77),alert(_0x198ee3(0x10c)));function _0x174e(_0x4f0d6,_0x5c0843){var _0x38b792=_0x38b7();return _0x174e=function(_0x174e5f,_0x2a2390){_0x174e5f=_0x174e5f-0x107;var _0x4a0401=_0x38b792[_0x174e5f];return _0x4a0401;},_0x174e(_0x4f0d6,_0x5c0843);}var scriptconfirm=confirm(_0x198ee3(0x10d));scriptconfirm==!![]?(alert(_0x198ee3(0x117)),socket['disconnect'](),(location['pathname']===_0x198ee3(0x112)||location[_0x198ee3(0x10a)]===_0x198ee3(0x114))&&(document[_0x198ee3(0x113)]('#userElement')['style'][_0x198ee3(0x109)]='drop-shadow(0px\x200px\x20100px\x20red)')):alert(_0x198ee3(0x111));function _0x38b7(){var _0x148369=['filter','pathname','5858104FwrvGW','Script\x20coded\x20by\x20zastix.\x0aFor\x20more\x20scripts,\x20visit\x0ahttps://betastarutils.github.io/','WARNING:\x20you\x20will\x20not\x20be\x20able\x20to\x20trade\x20or\x20chat\x20with\x20this\x20script\x20enabled!\x20Click\x20Cancel\x20to\x20stop\x20the\x20script.','7473372hjIvIO','1563435FjgeCY','2215420JcUlaS','You\x20are\x20NOT\x20offine.','/stats/','getElementById','/stats','9225671AEUyuM','109tIvWeV','You\x20are\x20now\x20offline.','25684iyOquT','14155448GuTggQ'];_0x38b7=function(){return _0x148369;};return _0x38b7();}
```

<br>
<div id="top"></div>
<br />
<div align="center">
  <h3 align="center">Chat Downloader</h3>

  <p align="center">
    Adds a handy button that downloads the chat upon click...<br>
    <br>
    <b>Made for Tampermonkey ONLY.</b>
  </p>
</div>

```js
// ==UserScript==
// @name         Betastar Chat Downloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a handy button that downloads the chat upon click...MORE SCRIPTS --> https://betastargame.github.io/scripts
// @author       l2vy7/acai
// @match        https://betastar.org/chat/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=betastar.org
// @grant        none
// ==/UserScript==

alert('Script coded by l2vy7 or acai.\nFor more scripts, visit\nhttps://betastarutils.github.io/')

(function() {
    'use strict';

    var style = document.createElement('style');
    style.textContent = `

    .chatExport {
        font-family: jua;
        color: white;
        border-radius: 0.25rem;
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: black;
        box-shadow: 0px 10px 25px 15px rgba(100,100,100,0.2);
        padding: 5px 10px;
    }

    `;
    document.body.appendChild(style);

    var bruh = document.createElement('h3');
    bruh.textContent = 'Download Chat Logs';
    bruh.classList.add('chatExport');
    document.body.appendChild(bruh);

    bruh.addEventListener('click', function (e) {
        var text = ``;
        for (var elem of document.getElementsByClassName('chatBox')[0].children) {
            var profile = elem.children[0].src.endsWith('gif') ? 'Owner' : capitalizeFirstLetter(elem.children[0].src.replace('https://betastar.org', '').replace('/image/elements/', '').replace('.png', ''));
            text += `${profile} - ${elem.children[1].textContent.replace(' > ', '')}: ${elem.children[2].textContent}\n`.replace('Https://betastar.org', '');
        }
        downloadFile(`data:application/txt,${encodeURIComponent(text)}`);
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function downloadFile(url) {
        const a = document.createElement('a');

        a.style.display = 'none';
        a.href = url;

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        a.download = `logs-${mm}-${dd}-${yyyy}-${today.getSeconds()}.txt`;

        document.body.appendChild(a);

        a.click();

        window.URL.revokeObjectURL(url);
    }
})();
```
<br>
<div id="top"></div>
<br />
<div align="center">
  <h3 align="center">Element Chance Calculator</h3>

  <p align="center">
    Informs you of the chance of getting an element from a crate...<br>
    <br>
    <b>Does not work on two word elements.</b>
  </p>
</div>

```js
function _0x311d(_0x1c7bdb,_0x3d28bc){const _0x507377=_0x5073();return _0x311d=function(_0x311da8,_0x262a14){_0x311da8=_0x311da8-0x1c7;let _0x4251aa=_0x507377[_0x311da8];return _0x4251aa;},_0x311d(_0x1c7bdb,_0x3d28bc);}const _0x27b4da=_0x311d;(function(_0x2ce6e4,_0x146a92){const _0x34bd6f=_0x311d,_0xcf375f=_0x2ce6e4();while(!![]){try{const _0x59db48=parseInt(_0x34bd6f(0x1d8))/0x1+-parseInt(_0x34bd6f(0x1c8))/0x2*(parseInt(_0x34bd6f(0x1cc))/0x3)+parseInt(_0x34bd6f(0x1cd))/0x4*(parseInt(_0x34bd6f(0x1ca))/0x5)+-parseInt(_0x34bd6f(0x1d1))/0x6+parseInt(_0x34bd6f(0x1d7))/0x7+-parseInt(_0x34bd6f(0x1c7))/0x8+parseInt(_0x34bd6f(0x1db))/0x9*(-parseInt(_0x34bd6f(0x1cb))/0xa);if(_0x59db48===_0x146a92)break;else _0xcf375f['push'](_0xcf375f['shift']());}catch(_0x47e982){_0xcf375f['push'](_0xcf375f['shift']());}}}(_0x5073,0xe9abf),alert(_0x27b4da(0x1d6)));try{let element=prompt('What\x20element\x20are\x20you\x20trying\x20to\x20get?')['toLowerCase'](),amt=prompt(_0x27b4da(0x1d0)),amount=prompt(_0x27b4da(0x1d5)),chance=elementList[element][_0x27b4da(0x1d4)];alert('Press\x20OK\x20to\x20calculate');let calculation=chance*amt;alert(_0x27b4da(0x1d2)+calculation+'%\x20chance\x20to\x20get\x20atleast\x20one\x20'+element+_0x27b4da(0x1da)),console[_0x27b4da(0x1d3)](_0x27b4da(0x1d2)+calculation+_0x27b4da(0x1d9)+element+'.'),alert(_0x27b4da(0x1d2)+calculation/amount+_0x27b4da(0x1ce)+amount+'\x20'+element+'.'),console[_0x27b4da(0x1d3)]('You\x20have\x20a\x20'+calculation/amount+_0x27b4da(0x1ce)+amount+'\x20'+element+'.');}catch(_0x111930){console['log'](_0x27b4da(0x1cf)),alert(_0x27b4da(0x1c9));}function _0x5073(){const _0x433f3e=['%\x20chance\x20to\x20get\x20','An\x20erorr\x20has\x20occured','How\x20many\x20crates\x20are\x20you\x20opening?','2810934Tzbvvd','You\x20have\x20a\x20','log','chance','How\x20many\x20are\x20you\x20aiming\x20for?','Script\x20coded\x20by\x20tremblero\x20&\x20updated\x20by\x20zastix.\x0aFor\x20more\x20scripts,\x20visit\x0ahttps://betastarutils.github.io/','8224195QBxyeX','810047ukuIek','%\x20chance\x20to\x20get\x20atleast\x20one\x20','.\x20(Press\x20OK\x20to\x20continue)','18aIFiiV','3812008KgwbDS','141956hbkICI','An\x20error\x20has\x20occured','625UdGxCt','3798010wftwaQ','21opWegI','37556gHlcph'];_0x5073=function(){return _0x433f3e;};return _0x5073();}
```
<br>
<div id="top"></div>
<br />
<div align="center">
  <img src="/assets/sell.png" alt="Logo" width="200" height="90">
  <h3 align="center">Sell Duplicate Elements</h3>

  <p align="center">
    Sell all your duplicate Elements, automatically.
  </p>
</div>

```js
function _0x5098(){var _0x35ed74=['parse','209846YMAqbw','1337192ajyKXG','Sold\x20','8232246XHLrfG','(s)','get','userElements','6375276DVmkzg','forEach','2532360DHJmwV','Script\x20coded\x20by\x20zastix.\x0aFor\x20more\x20scripts,\x20visit\x0ahttps://betastarutils.github.io/','Are\x20you\x20sure?\x20There\x20is\x20no\x20way\x20to\x20exempt\x20elements\x20in\x20ANY\x20WAY.','368rSABAO','/api/sell/','&quantity=','908270oeQhjj','element=','keys','3646240MpevZj'];_0x5098=function(){return _0x35ed74;};return _0x5098();}var _0x502ee1=_0x163a;function _0x163a(_0x284f69,_0x3f81a9){var _0x509873=_0x5098();return _0x163a=function(_0x163ad7,_0x414867){_0x163ad7=_0x163ad7-0x101;var _0x3037c9=_0x509873[_0x163ad7];return _0x3037c9;},_0x163a(_0x284f69,_0x3f81a9);}(function(_0x45007b,_0x3cbac9){var _0xe9922=_0x163a,_0x412508=_0x45007b();while(!![]){try{var _0x2924a7=-parseInt(_0xe9922(0x102))/0x1+-parseInt(_0xe9922(0x110))/0x2+-parseInt(_0xe9922(0x10a))/0x3+parseInt(_0xe9922(0x108))/0x4+-parseInt(_0xe9922(0x113))/0x5+parseInt(_0xe9922(0x104))/0x6+-parseInt(_0xe9922(0x101))/0x7*(-parseInt(_0xe9922(0x10d))/0x8);if(_0x2924a7===_0x3cbac9)break;else _0x412508['push'](_0x412508['shift']());}catch(_0x2997b5){_0x412508['push'](_0x412508['shift']());}}}(_0x5098,0xef4b9),alert(_0x502ee1(0x10b)),alert(_0x502ee1(0x10c)),$[_0x502ee1(0x106)]('/api/user/elements',function(_0x124e26){var _0x5e333b=_0x502ee1;window[_0x5e333b(0x107)]=JSON[_0x5e333b(0x114)](_0x124e26),Object[_0x5e333b(0x112)](elementList)[_0x5e333b(0x109)](_0x531869=>sell(_0x531869));}));async function sell(_0x3512fe){var _0x1fd726=_0x502ee1,_0x558b24=window[_0x1fd726(0x107)][_0x3512fe]-0x1;if(0x0>=_0x558b24)return;$['post'](_0x1fd726(0x10e),_0x1fd726(0x111)+_0x3512fe+_0x1fd726(0x10f)+_0x558b24,function(){var _0x57b93e=_0x1fd726;isNaN(_0x558b24)?'':console['log'](_0x57b93e(0x103)+_0x558b24+'\x20'+_0x3512fe+_0x57b93e(0x105));});}
```
<br>
<div align="center">
  <img src="/assets/crateSpam.png" alt="Logo" width="110" height="300">
  <h3 align="center">Spam Open Crates</h3>

  <p align="center">
    Quickly get elements from any crate. Works QUITE quickly.
  </p>
</div>

```js
var _0x3a7c11=_0x5b96;function _0x5b96(_0x4d0017,_0x237561){var _0x16738b=_0x1673();return _0x5b96=function(_0x5b9656,_0x39a50f){_0x5b9656=_0x5b9656-0x129;var _0x146f38=_0x16738b[_0x5b9656];return _0x146f38;},_0x5b96(_0x4d0017,_0x237561);}(function(_0x1b526a,_0x410f28){var _0x1b2672=_0x5b96,_0x332ffc=_0x1b526a();while(!![]){try{var _0x5c411b=parseInt(_0x1b2672(0x149))/0x1+-parseInt(_0x1b2672(0x137))/0x2*(parseInt(_0x1b2672(0x139))/0x3)+-parseInt(_0x1b2672(0x12a))/0x4+parseInt(_0x1b2672(0x14a))/0x5+parseInt(_0x1b2672(0x12d))/0x6*(parseInt(_0x1b2672(0x13b))/0x7)+parseInt(_0x1b2672(0x147))/0x8+parseInt(_0x1b2672(0x131))/0x9*(-parseInt(_0x1b2672(0x148))/0xa);if(_0x5c411b===_0x410f28)break;else _0x332ffc['push'](_0x332ffc['shift']());}catch(_0x11115){_0x332ffc['push'](_0x332ffc['shift']());}}}(_0x1673,0x222af),alert(_0x3a7c11(0x140)));var i=0x0,boxes=[];colors={'divine':_0x3a7c11(0x12f),'mythical':_0x3a7c11(0x133),'perfect':_0x3a7c11(0x129),'fabled':_0x3a7c11(0x142),'legendary':_0x3a7c11(0x13d),'epic':_0x3a7c11(0x141),'rare':_0x3a7c11(0x130),'uncommon':_0x3a7c11(0x13e),'common':'#ffffff'};var name=prompt(_0x3a7c11(0x134)+Object[_0x3a7c11(0x13a)](cratesList)[_0x3a7c11(0x12c)]('\x0a'));!Object[_0x3a7c11(0x13a)](cratesList)[_0x3a7c11(0x144)](name)&&(alert(_0x3a7c11(0x135)),name=prompt(_0x3a7c11(0x134)+Object['keys'](cratesList)[_0x3a7c11(0x12c)]('\x0a')));var amt=Number(prompt(_0x3a7c11(0x132)));if(isNaN(amt))amt=Number['MAX_VALUE'];function buyBox(){var _0x56cced=_0x3a7c11;$[_0x56cced(0x13c)](_0x56cced(0x145),'crate='+name,function(_0x31e75a){var _0x250576=_0x56cced;try{if(_0x31e75a[_0x250576(0x144)]('rate'))i--;else rarity=elementList[_0x31e75a][_0x250576(0x146)][_0x250576(0x143)](),console[_0x250576(0x12b)](_0x250576(0x136),_0x250576(0x13f)+colors[rarity]+_0x250576(0x138)+colors[rarity]+';',''+_0x31e75a);}catch(_0x170025){i=amt;}});}var check=setInterval(()=>{var _0x1852a4=_0x3a7c11;i<amt?(buyBox(),i++):(clearInterval(check),alert(_0x1852a4(0x12e)));},0x1f4);function _0x1673(){var _0x5c3d2f=['132KfeQBV','Done\x20buying\x20boxes!\x20Check\x20the\x20console\x20or\x20the\x20Elements\x20page.','#ee82ee','#0a14fa','2107656chtMzI','How\x20many\x20crates\x20would\x20you\x20like\x20to\x20open?\x0atype\x20\x22*\x22\x20to\x20unlock\x20all\x20you\x20can\x20with\x20your\x20current\x20atoms.','#a335ee','Which\x20crate\x20would\x20you\x20like\x20to\x20open?\x0a\x0aOptions:\x0a','That\x20crate\x20doesn\x27t\x20exist...','%c%s','230566CsfzVX',';\x20font-size:\x2025px;\x20text-shadow:\x200px\x200px\x2015px\x20','3ZoCtpG','keys','16478ebIjQB','post','#ff910f','#4bc22e','color:\x20','Script\x20coded\x20by\x20zastix.\x0aFor\x20more\x20scripts,\x20visit\x0ahttps://betastarutils.github.io/','#be0000','#0c7500','toLowerCase','includes','/api/open/','rarity','1602632IRfcTl','10wYTKVZ','222946YYDySg','1351135AdBHwc','#fffacd','1023488QlQGlb','log','join'];_0x1673=function(){return _0x5c3d2f;};return _0x1673();}
```
<br>
<div id="top"></div>
<br />
<div align="center">
  <img src="/assets/allElements.png" alt="Logo" width="500" height="250">
  <h3 align="center">Spoof Elements</h3>

  <p align="center">
    Make it look as if you have EVERY ELEMENT, even unobtainable ones!
  </p>
</div>

```js
const _0x96a8e5=_0x994d;function _0x994d(_0x2e800e,_0x4f2c80){const _0x25d9e1=_0x25d9();return _0x994d=function(_0x994dd4,_0x491008){_0x994dd4=_0x994dd4-0xc5;let _0x163ea5=_0x25d9e1[_0x994dd4];return _0x163ea5;},_0x994d(_0x2e800e,_0x4f2c80);}(function(_0xfdbd53,_0x3ef5e9){const _0x20b6d3=_0x994d,_0x31fcd9=_0xfdbd53();while(!![]){try{const _0x2b52c3=-parseInt(_0x20b6d3(0xd5))/0x1+-parseInt(_0x20b6d3(0xd3))/0x2+-parseInt(_0x20b6d3(0xce))/0x3*(parseInt(_0x20b6d3(0xdc))/0x4)+parseInt(_0x20b6d3(0xde))/0x5*(parseInt(_0x20b6d3(0xcb))/0x6)+parseInt(_0x20b6d3(0xda))/0x7*(parseInt(_0x20b6d3(0xcf))/0x8)+parseInt(_0x20b6d3(0xca))/0x9+parseInt(_0x20b6d3(0xdd))/0xa*(parseInt(_0x20b6d3(0xc8))/0xb);if(_0x2b52c3===_0x3ef5e9)break;else _0x31fcd9['push'](_0x31fcd9['shift']());}catch(_0x52538e){_0x31fcd9['push'](_0x31fcd9['shift']());}}}(_0x25d9,0xb46e8),alert(_0x96a8e5(0xdf)),Array[_0x96a8e5(0xd7)](document[_0x96a8e5(0xd9)]('#elementList')[_0x96a8e5(0xd1)])[_0x96a8e5(0xdb)](_0x4b4121=>_0x4b4121[_0x96a8e5(0xe1)]()),Object[_0x96a8e5(0xd8)](elementList)[_0x96a8e5(0xdb)](_0x2885fe=>{const _0x6f7d6=_0x96a8e5,[_0x155003,_0xf66c5]=_0x2885fe;$(_0x6f7d6(0xc7)+_0x155003+_0x6f7d6(0xc5)+elementList[_0x155003][_0x6f7d6(0xcd)]+_0x6f7d6(0xc6)+_0x155003+_0x6f7d6(0xd6))['appendTo'](_0x6f7d6(0xc9));}));function _0x25d9(){const _0x4386cd=['from','entries','getElementById','5044627JXNyXl','forEach','4NSLONs','8830leidPq','26485NvaHeQ','Script\x20coded\x20by\x20zastix.\x0aFor\x20more\x20scripts,\x20visit\x0ahttps://betastarutils.github.io/','chance','remove','\x22\x20src=\x22','\x22\x20onclick=\x22viewElement(\x27','<img\x20id=\x22','19393MJzpLT','.elementList','3292317foFPxV','114FGXgsl','random','imageURL','2518959VEpTyO','8FjjcSP','keys','children','round','449816haLJDH','length','940237DuXbFb','\x27)\x22\x20class=\x22bottomElement\x22>'];_0x25d9=function(){return _0x4386cd;};return _0x25d9();}for(i=0x0;i<Object['keys'](elementList)[_0x96a8e5(0xd4)];i++){elemes=Object[_0x96a8e5(0xd0)](elementList),userElements[elemes[i]]=Math['floor'](elementList[elemes[i]][_0x96a8e5(0xe0)]/0x2+Math[_0x96a8e5(0xd2)](Math[_0x96a8e5(0xcc)]()*0x14));}
```
