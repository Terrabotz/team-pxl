
var myPix = new Array("images/shinoa.gif","images/shinoa2.gif","images/shinoa3.gif","images/shinoa4.gif","images/shinoa5.gif","images/shinoa6.gif","images/shinoa7.gif","images/shinoa8.gif");

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
}