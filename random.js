
var myPix = new Array("shinoa.gif","shinoa2.gif","shinoa3.gif","shinoa4.gif","shinoa5.gif","shinoa6.gif","shinoa7.gif","shinoa8.gif");

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
}