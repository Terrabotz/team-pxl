var quotes=new Array();
quotes[0] = "text1";
quotes[1] = "Text2";
quotes[2] = "text3";
quotes[3] = "text4";

var q = quotes.length;
var whichquote=Math.round(Math.random()*(q-1));
function showquote(){document.write(quotes[whichquote]);}
showquote();