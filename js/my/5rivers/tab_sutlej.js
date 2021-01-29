$(document).ready(function()
{
	$(sutlej_tab1_data).hide();
	$(sutlej_tab2_data).hide();
	$(sutlej_tab3_data).hide();
	$(sutlej_tab4_data).hide();
	$(sutlej_tab5_data).hide();
		
		$("#sutlej_tab1").click(function()
		{
			$(sutlej_tab1_data).toggle(500);
		});
		
		$("#sutlej_tab2").click(function()
		{
			$(sutlej_tab2_data).toggle(500);
		});
		
		$("#sutlej_tab3").click(function()
		{
			$(sutlej_tab3_data).toggle(500);
		});
		
		$("#sutlej_tab4").click(function()
		{
			$(sutlej_tab4_data).toggle(500);
		});
		
		$("#sutlej_tab5").click(function()
		{
			$(sutlej_tab5_data).toggle(500);
		});
		
			$("#sutlej_hide_all").click(function()
			{
				$(sutlej_tab1_data).hide(200);
				$(sutlej_tab2_data).hide(200);
				$(sutlej_tab3_data).hide(200);
				$(sutlej_tab4_data).hide(200);
				$(sutlej_tab5_data).hide(200);
					$(seen).css({"visibility": "visible"});
					$(hide).css({"visibility": "hidden"});
			});
			
			$("#sutlej_show_all").click(function()
			{
				$(sutlej_tab1_data).show(200);
				$(sutlej_tab2_data).show(200);
				$(sutlej_tab3_data).show(200);
				$(sutlej_tab4_data).show(200);
				$(sutlej_tab5_data).show(200);
					$(seen).css({"visibility": "hidden"});
					$(hide).css({"visibility": "visible"});
			});
});