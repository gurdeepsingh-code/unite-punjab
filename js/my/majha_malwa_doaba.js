$(document).ready(function()
{
	$(one).css({"background-color": "white", "color": "skyblue"});
$(o).show();
$(t).hide();
$(th).hide();

$("#one").click(function()
{
	$(one).css({"background-color": "white", "color": "skyblue"});
	$(two).css({"background-color": "skyblue", "color": "white"});
	$(three).css({"background-color": "skyblue", "color": "white"});
		$(o).show(500);
        $(t).hide(100);
        $(th).hide(100);
});
   
        
$("#two").click(function()
{
	$(two).css({"background-color": "white", "color": "skyblue"});
	$(one).css({"background-color": "skyblue", "color": "white"});
	$(three).css({"background-color": "skyblue", "color": "white"});
        $(t).show(500);
        $(o).hide(100);
        $(th).hide(100);
});

$("#three").click(function()
{
	$(three).css({"background-color": "white", "color": "skyblue"});
	$(two).css({"background-color": "skyblue", "color": "white"});
	$(one).css({"background-color": "skyblue", "color": "white"});
		$(th).show(500);
        $(o).hide(100);
        $(t).hide(100);
});

});