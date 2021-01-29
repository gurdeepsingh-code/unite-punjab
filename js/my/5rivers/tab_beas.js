$(document).ready(function()
{
	$(beas_tab1_data).hide();
	$(beas_tab2_data).hide();
	$(beas_tab3_data).hide();
	$(beas_tab4_data).hide();
	
	$("#beas_tab1").click(function()
	{
		$(beas_tab1_data).toggle(500);
	});
	
	$("#beas_tab2").click(function()
	{
		$(beas_tab2_data).toggle(500);
	});
	
	$("#beas_tab3").click(function()
	{
		$(beas_tab3_data).toggle(500);
			$(beas_tab3a_data).hide();
			$(beas_tab3b_data).hide();
			$(beas_tab3c_data).hide();
			$(beas_tab3d_data).hide();
			$(beas_tab3e_data).hide();
			$(beas_tab3f_data).hide();
			$(beas_tab3g_data).hide();
			$(beas_tab3h_data).hide();
			$(beas_tab3i_data).hide();
			$(beas_tab3j_data).hide();
			$(beas_tab3k_data).hide();
			$(beas_tab3l_data).hide();
			$(beas_tab3m_data).hide();
			$(beas_tab3n_data).hide();
	});
			
			$("#beas_tab3a").click(function()
			{
				$(beas_tab3a_data).toggle(200);
			});
			
			$("#beas_tab3b").click(function()
			{
				$(beas_tab3b_data).toggle(200);
			});
			
			$("#beas_tab3c").click(function()
			{
				$(beas_tab3c_data).toggle(200);
			});
			
			$("#beas_tab3d").click(function()
			{
				$(beas_tab3d_data).toggle(200);
			});
			
			$("#beas_tab3e").click(function()
			{
				$(beas_tab3e_data).toggle(200);
			});
			
			$("#beas_tab3f").click(function()
			{
				$(beas_tab3f_data).toggle(200);
			});
			
			$("#beas_tab3g").click(function()
			{
				$(beas_tab3g_data).toggle(200);
			});
			
			$("#beas_tab3h").click(function()
			{
				$(beas_tab3h_data).toggle(200);
			});
			
			$("#beas_tab3i").click(function()
			{
				$(beas_tab3i_data).toggle(200);
			});
			
			$("#beas_tab3j").click(function()
			{
				$(beas_tab3j_data).toggle(200);
			});
			
			$("#beas_tab3k").click(function()
			{
				$(beas_tab3k_data).toggle(200);
			});
			
			$("#beas_tab3l").click(function()
			{
				$(beas_tab3l_data).toggle(200);
			});
			
			$("#beas_tab3m").click(function()
			{
				$(beas_tab3m_data).toggle(200);
			});
			
			$("#beas_tab3n").click(function()
			{
				$(beas_tab3n_data).toggle(200);
			});
	
	$("#beas_tab4").click(function()
	{
		$(beas_tab4_data).toggle(500);
	});
	
	$("#beas_show_all").click(function()
	{	
		$(beas_tab1_data).show();
		$(beas_tab2_data).show();
		$(beas_tab3_data).show();
		$(beas_tab4_data).show();
		$(beas_tab3a_data).show();
			$(beas_tab3b_data).show();
			$(beas_tab3c_data).show();
			$(beas_tab3d_data).show();
			$(beas_tab3e_data).show();
			$(beas_tab3f_data).show();
			$(beas_tab3g_data).show();
			$(beas_tab3h_data).show();
			$(beas_tab3i_data).show();
			$(beas_tab3j_data).show();
			$(beas_tab3k_data).show();
			$(beas_tab3l_data).show();
			$(beas_tab3m_data).show();
			$(beas_tab3n_data).show();
		$(seen).css({"visibility": "hidden"});
		$(hide).css({"visibility": "visible"});
	});
	
	$("#beas_hide_all").click(function()
	{	
		$(beas_tab1_data).hide();
		$(beas_tab2_data).hide();
		$(beas_tab3_data).hide();
		$(beas_tab4_data).hide();
		$(beas_tab3a_data).hide();
			$(beas_tab3b_data).hide();
			$(beas_tab3c_data).hide();
			$(beas_tab3d_data).hide();
			$(beas_tab3e_data).hide();
			$(beas_tab3f_data).hide();
			$(beas_tab3g_data).hide();
			$(beas_tab3h_data).hide();
			$(beas_tab3i_data).hide();
			$(beas_tab3j_data).hide();
			$(beas_tab3k_data).hide();
			$(beas_tab3l_data).hide();
			$(beas_tab3m_data).hide();
			$(beas_tab3n_data).hide();
		$(seen).css({"visibility": "visible"});
		$(hide).css({"visibility": "hidden"});
	});
});