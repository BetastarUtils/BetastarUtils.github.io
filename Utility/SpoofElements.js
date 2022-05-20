//coded by zastix//
for (i=0;i<document.getElementById('#elementList').children.length;i++) {
    document.getElementById('#elementList').children[i].remove();
}
Object.entries(elementList).forEach((entry) => {
	const [key, value] = entry;
	$(`<img id="${key}" src="${elementList[key].imageURL}" onclick="viewElement('${key}')" class="bottomElement">`).appendTo(".elementList");
})
for (i=0;i<Object.keys(elementList).length;i++) {
    elemes = Object.keys(elementList)
    userElements[elemes[i]] = Math.floor(Math.random() * 100);
}
