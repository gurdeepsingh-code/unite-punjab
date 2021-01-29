$(document).ready(function()
{
$(info1).hide();
$(info2).hide();
$(info3).hide();
$(info4).hide();
$(info5).hide();


$("#infoone").click(function()
{
	$(infoone).css({"background-color": "#b32400", "color": "white"});
	$(infotwo).css({"background-color": "#e62e00", "color": "white"});
	$(infothree).css({"background-color": "#e62e00", "color": "white"});
	$(infofour).css({"background-color": "#e62e00", "color": "white"});
	$(infofive).css({"background-color": "#e62e00", "color": "white"});
		$(info1).toggle(500);
});
   
        
$("#infotwo").click(function()
{		
	$(infotwo).css({"background-color": "#b32400", "color": "white"});
	$(infoone).css({"background-color": "#e62e00", "color": "white"});
	$(infothree).css({"background-color": "#e62e00", "color": "white"});
	$(infofour).css({"background-color": "#e62e00", "color": "white"});
	$(infofive).css({"background-color": "#e62e00", "color": "white"});
		$(info2).toggle(500);
});

$("#infothree").click(function()
{
	$(infothree).css({"background-color": "#b32400", "color": "white"});
	$(infotwo).css({"background-color": "#e62e00", "color": "white"});
	$(infoone).css({"background-color": "#e62e00", "color": "white"});
	$(infofour).css({"background-color": "#e62e00", "color": "white"});
	$(infofive).css({"background-color": "#e62e00", "color": "white"});
		$(info3).toggle(500);
});

$("#infofour").click(function()
{
	$(infofour).css({"background-color": "#b32400", "color": "white"});
	$(infotwo).css({"background-color": "#e62e00", "color": "white"});
	$(infothree).css({"background-color": "#e62e00", "color": "white"});
	$(infoone).css({"background-color": "#e62e00", "color": "white"});
	$(infofive).css({"background-color": "#e62e00", "color": "white"});
		$(info4).toggle(500);
});

$("#infofive").click(function()
{
	$(infofive).css({"background-color": "#b32400", "color": "white"});
	$(infotwo).css({"background-color": "#e62e00", "color": "white"});
	$(infothree).css({"background-color": "#e62e00", "color": "white"});
	$(infofour).css({"background-color": "#e62e00", "color": "white"});
	$(infoone).css({"background-color": "#e62e00", "color": "white"});
		$(info5).toggle(500);
});

});