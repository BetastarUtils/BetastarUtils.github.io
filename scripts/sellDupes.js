alert('Script coded by Zastix, Betastar tester\nFor more scripts, visit\nhttps://villainsrule2000.github.io/Betastar/')

async function sell(element) {
	let amt = userElements[element] - 1
	if (0 >= amt) return;
	var postData = `element=${element}&quantity=${amt}`;
	$.post(`/api/sell/`, postData, function() {
		console.log(`Sold ${amt} ${element}(s)`)
	})
}

Object.keys(elementList).forEach(element => {
	sell(element)
})
