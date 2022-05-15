alert('Script coded by Zastix, Betastar tester\nFor more scripts, visit\nhttps://villainsrule2000.github.io/Betastar/')
alert('Started adding atoms! To stop, refresh the page.')

function updateAtoms() {
    $.get('/api/user', function(data) {
        userData = JSON.parse(data);
        var atomsLocalized = userData.atoms.toLocaleString();
        document.getElementById("#userAtoms").innerText = atomsLocalized;
    });
}

function buyBox() {
    var postData = 'crate=add';
    $.post('/api/open/', postData, function(data) {});
}

setInterval(() => {
    buyBox();
    updateAtoms()
}, 1001);
