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
