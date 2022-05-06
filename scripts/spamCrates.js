let name = prompt("Which crate would you like to open?\n\Options:\nall\nadd\nbia");
let amt;
let i = 1;
amt = Number(prompt("How many crates would you like to open?"));

function buyBox() {
    var postData = 'crate=' + name;
    $.post('/api/open/', postData, function(data) {
        console.log('%c%s', 'color: white; font-size: 25px; text-shadow: 0px 0px 15px black;', `${data}`);
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
        alert("Done buying boxes! Check the console or the elements page to see what you got.");
    }
}, 1001);
