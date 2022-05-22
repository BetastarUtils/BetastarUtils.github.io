alert('Script coded by Zastix, Betastar tester\nFor more scripts, visit\nhttps://villainsrule2000.github.io/Betastar/')

Array.from(document.getElementById('#elementList').children).forEach(a => a.remove())
Object.entries(elementList).forEach((entry) => {
	const [key, value] = entry;
	$(`<img id="${key}" src="${elementList[key].imageURL}" onclick="viewElement('${key}')" class="bottomElement">`).appendTo(".elementList");
})
for (i=0;i<Object.keys(elementList).length;i++) {
    elemes = Object.keys(elementList)
    if (elemes[i] === 'nigger') userElements[elemes[i]] = Math.floor(Math.random() * 4);
    else userElements[elemes[i]] = Math.floor(elementList[elemes[i]]['chance'] / 2 + Math.round(Math.random() * 20));
}
