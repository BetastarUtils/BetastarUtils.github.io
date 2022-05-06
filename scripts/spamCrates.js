let i = 1;
let boxes = []
Object.keys(cratesList).forEach(e => {
    boxes.push(e)
})
boxes2 = boxes.join("\n")
let name = prompt("Which crate would you like to open?\n\nOptions:\n" + boxes2);
if (!boxes.includes(name)) {
    alert('That crate doestn exist..')
    name = prompt("Which crate would you like to open?\n\nOptions:\n" + boxes2);
}
let amt = Number(prompt("How many crates would you like to open?"));

function buyBox() {
    var postData = 'crate=' + name;
    $.post('/api/open/', postData, function(data) {
        if (data === "You're being rate limited.") i--
        else console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px black;', `${data}`);
    });
}
var check = setInterval(() => {
    if (i <= amt) {
        buyBox();
        i++;
    } else {
        clearInterval(check);
        alert("Done buying boxes! Check the console or the Elements page.");
    }
}, 1001);
