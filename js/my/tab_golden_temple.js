$(document).ready(function()
{
	$(tab1_data).hide();
		$(tab1a_data).hide();
		$(tab1b_data).hide();
	$(tab2_data).hide();
	$(tab3_data).hide();
	$(tab4_data).hide();
	$(tab5_data).hide();
		
	
	$("#tab1").click(function()
	{
		$(tab1_data).toggle(500);
			
			$("#tab1a").click(function()
			{
				$(tab1a_data).toggle(200);
			});
			$("#tab1b").click(function()
			{
				$(tab1b_data).toggle(200);
			});
	});
	
	$("#tab2").click(function()
	{
		$(tab2_data).toggle(500);
	});
	
	$("#tab3").click(function()
	{
		$(tab3_data).toggle(500);
	});
	
	$("#tab4").click(function()
	{
		$(tab4_data).toggle(500);
	});
	
	$("#tab5").click(function()
	{
		$(tab5_data).toggle(500);
	});
});