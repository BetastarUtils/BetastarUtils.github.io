// THIS IS IN BETA. MEANING, I AM STILL PERFECTING THE CODE.
let name = prompt("Which box would you like to open?\n\nList:\nall\nadd");
let amt;
let i = 1;
amt = Number(prompt("How many boxes would you like to open."));

function buyBox() {
    var postData = 'crate=' + name;
    $.post('/api/open/', postData, function(data) {
        elementRarity = window.elementList[data].rarity
        if (elementRarity === "Uncommon") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px lime;';
        } else if (elementRarity === "Trash") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px blue;';
        } else if (elementRarity === "Common") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px red;';
        } else if (elementRarity === "Custom") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px gold;';
        } else if (elementRarity === "Rare") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px skyblue;';
        } else if (elementRarity === "Epic") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px lemonchiffon;';
        } else if (elementRarity === "Fabled") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px plum;';
        } else if (elementRarity === "Legendary") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px violet;';
        } else if (elementRarity === "Mythical") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px violet;';
        } else if (elementRarity === "Divine") {
            console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px plum;';
          
        } else if (elementRarity === undefined) {}
        if (data === "You're being rate limited.") {
            i--;
        }
    });
}
var check = setInterval(() => {
    if (i <= amt) {
        buyBox();
        i++;
    } else {
        clearInterval(check);
        alert("Done buying boxes!");
    }
}, 1001);
