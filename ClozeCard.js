var ClozeCard = function(fullText, cloze) {	
	this.fullText = fullText;
	this.cloze = cloze;
	this.partial = fullText.replace(cloze, "");	
};

module.exports =  ClozeCard;