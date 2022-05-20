//coded by zastix//
//accumlitively adds atoms, refresh to stop//
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
