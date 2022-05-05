// This script might not have an end...at least, not a coded one...
alert('Started adding atoms!')

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
