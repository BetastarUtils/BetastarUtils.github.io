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

var name = prompt("Which crate would you like to open?\n\nOptions:\n" + Object.keys(cratesList).join('\n'));
if (!Object.keys(cratesList).includes(name)) {
    alert('That crate doesn\'t exist...')
    name = prompt("Which crate would you like to open?\n\nOptions:\n" + Object.keys(cratesList).join('\n'));
}
var amt = Number(prompt("How many crates would you like to open?\ntype \"*\" to unlock all you can with your current atoms."));
if (isNaN(amt)) amt = Number.MAX_VALUE

function buyBox() {
    $.post('/api/open/', `crate=${name}`, function(data) {
        try {
            if (data.includes("rate")) i--
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
}, 500);
