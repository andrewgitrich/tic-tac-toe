$(function(){

var playerOne = '<img src="http://www.imtbtrails.com/forum/attachments/image-png.18290/" style="width:55px;height:55px;">';
var playerTwo = '<img src= "http://vignette3.wikia.nocookie.net/jackinthebox/images/1/15/TwoTacos.png/revision/latest?cb=20140615132150" style="width:55px;height:55px;">';
//prevent highlight on a doublecilck 
//

$("td").mousedown(function(e){ e.preventDefault(); });

$("td").dblclick(function(){
	
	$(this).html("X");
});

$("td").click(function(){
	$(this).html("O");
	
});






});