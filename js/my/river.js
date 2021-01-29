$(document).ready(function()
{
$(r1).show();
$(r2).hide();
$(r3).hide();
$(r4).hide();
$(r5).hide();


$("#rone").click(function()
{
		$(r1).show();
$(r2).hide();
$(r3).hide();
$(r4).hide();
$(r5).hide();
});
   
        
$("#rtwo").click(function()
{
        $(r1).hide();
$(r2).show();
$(r3).hide();
$(r4).hide();
$(r5).hide();
});

$("#rthree").click(function()
{
		$(r1).hide();
$(r2).hide();
$(r3).show();
$(r4).hide();
$(r5).hide();
});

$("#rfour").click(function()
{
		$(r1).hide();
$(r2).hide();
$(r3).hide();
$(r4).show();
$(r5).hide();
});

$("#rfive").click(function()
{
		$(r1).hide();
$(r2).hide();
$(r3).hide();
$(r4).hide();
$(r5).show();
});

});