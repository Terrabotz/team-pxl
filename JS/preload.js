var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "Images/shinoa.gif",
    "Images/shinoa2.gif",
	"Images/shinoa3.gif",
	"Images/shinoa4.gif",
	"Images/shinoa5.gif",
	"Images/shinoa6.gif",
	"Images/shinoa7.gif",
    "Images/shinoa8.gif"
)