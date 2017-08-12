var ClozeCard = function(fullText, cloze) {
	if(fullText.includes(cloze)) {
		this.fullText = fullText;
		this.cloze = cloze;
		this.partial = fullText.replace(cloze, "");	
	}
	else {
		console.log(cloze + " doesn't appear in " + fullText);
	}		
};

module.exports =  ClozeCard;