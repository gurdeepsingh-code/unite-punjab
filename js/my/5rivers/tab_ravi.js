$(document).ready(function()
{
	$(ravi_tab1_data).hide();
	$(ravi_tab2_data).hide();
	$(ravi_tab3_data).hide();
		$(ravi_tab3a_data).hide();
		$(ravi_tab3b_data).hide();
		$(ravi_tab3c_data).hide();
		$(ravi_tab3d_data).hide();
	$(ravi_tab4_data).hide();
		
		$("#ravi_tab1").click(function()
		{
			$(ravi_tab1_data).toggle(500);
		});
		
		$("#ravi_tab2").click(function()
		{
			$(ravi_tab2_data).toggle(500);
		});
		
		$("#ravi_tab3").click(function()
		{
			$(ravi_tab3_data).toggle(500);
				
				$("#ravi_tab3a").click(function()
				{
					$(ravi_tab3a_data).toggle(200);
				});
				$("#ravi_tab3b").click(function()
				{
					$(ravi_tab3b_data).toggle(200);
				});
				$("#ravi_tab3c").click(function()
				{
					$(ravi_tab3c_data).toggle(200);
				});
				$("#ravi_tab3d").click(function()
				{
					$(ravi_tab3d_data).toggle(200);
				});
		});
		
		$("#ravi_tab4").click(function()
		{
			$(ravi_tab4_data).toggle(500);
		});
		
		$("#ravi_show_all").click(function()
		{
			$(ravi_tab1_data).show();
			$(ravi_tab2_data).show();
			$(ravi_tab3_data).show();
				$(ravi_tab3a_data).show();
				$(ravi_tab3b_data).show();
				$(ravi_tab3c_data).show();
				$(ravi_tab3d_data).show();
			$(ravi_tab4_data).show();
				$(seen).css({"visibility": "hidden"});
				$(hide).css({"visibility": "visible"});
		});
		
		$("#ravi_hide_all").click(function()
		{
			$(ravi_tab1_data).hide();
			$(ravi_tab2_data).hide();
			$(ravi_tab3_data).hide();
				$(ravi_tab3a_data).hide();
				$(ravi_tab3b_data).hide();
				$(ravi_tab3c_data).hide();
				$(ravi_tab3d_data).hide();
			$(ravi_tab4_data).hide();
				$(seen).css({"visibility": "visible"});
				$(hide).css({"visibility": "hidden"});
		});
});