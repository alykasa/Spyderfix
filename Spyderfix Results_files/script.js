
(function($){ 
})(jQuery);

$(function(){
	$('#overlay').hide();
	
	$('#email_popup_link').click(function(){
		$('#overlay').show();
	});
	
	$('.overlay_close').click(function(){
		$('#overlay').hide();
	});
	
	$('#email_send').click(function(){
		$(this).attr('disabled', 'disabled');		
		var to = $('#email_to').val();
		var from =  $('#email_from').val();
		var url = $('#email_url').val();
		var msg = $('#email_message').val();
		var dataString = 'email=true&to='+to+'&from='+from+'&url='+url+'&msg='+encodeURIComponent(msg);

		$.ajax({
			type: "POST",
			data: dataString,
			success: function(rval){
				if(rval == 'true'){
					alert("Thank You! We appreciate your feedback.");
					$('#overlay').hide();
					$('#email_send').removeAttr('disabled');
				}else{
					alert("Email could not be sent. Please verify the information and try again.");
					$('#email_send').removeAttr('disabled');
				}
			}
		});
	});
	
	$('.show_all > a').click(function(){
		$(this).siblings('div').show();
		$(this).hide();
	});
	
	$('.collapse').hide();
 $('#tab-keywords').idTabs();
 $('#local-seo-keywords').idTabs();
 $('#ppc-keywords').idTabs();
});


		$(document).ready(function(){
				//Examples of how to assign the ColorBox event to elements
				$(".inline").colorbox({inline:true, width:"65%"});
				$(".callbacks").colorbox({
					onOpen:function(){ alert("onOpen: colorbox is about to open"); },
					onLoad:function(){ alert("onLoad: colorbox has started to load the targeted content"); },
					onComplete:function(){ alert("onComplete: colorbox has displayed the loaded content"); },
					onCleanup:function(){ alert("onCleanup: colorbox has begun the close process"); },
					onClosed:function(){ alert("onClosed: colorbox has completely closed"); }
				});
				//Example of preserving a JavaScript event for inline calls.
				$("#click").click(function(){ 
					$("#click").css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
					return false;
				});
				
				  $("#indexByEngine ul").idTabs(); 

			});

			$(document).ready(function(){
				$("#nav1").click( function(e) {
					e.preventDefault();
					$.scrollTo("#alphaOverall", 750, {offset:-130} );
				});
				$("#nav2").click( function(e) {
					e.preventDefault();
					$.scrollTo("#betaAlphaSpeed", 750, {offset:-130} );
				});				
				$("#nav3").click( function(e) {
					e.preventDefault();
					$.scrollTo("#deltaAlphaSeo", 750, {offset:-130} );
				});
				$("#nav4").click( function(e) {
					e.preventDefault();
					$.scrollTo("#gammaAlphaPPC", 750, {offset:-130} );
				});
				$("#nav5").click( function(e) {
					e.preventDefault();
					$.scrollTo("#lambdaAlphaSocial", 750, {offset:-130} );
				});
				$("#nav6").click( function(e) {
					e.preventDefault();
					$.scrollTo("#omegaAlphaRender", 750, {offset:-130} );
				});
			
				/* Find the #id of specific score,
				select the span with "score" class,
				and add text $score_dm */
				//$("#overallScore").find(".score").text("$score_dm");
				//$("#overallScore").find(".score").text("27");
				/* Find the #id of specific score,
				select the span with "comment" class,
				and add custom comment */
				$("#overallScore").find(".comment").text("Needs work");				
				
				 // PieChart function runs AFTER score has been injected.
				 var initPieChart = function() {
						$(".largeScore").largeChart({
							trackColor: "#7a7a7a",
							scaleColor: false,
							lineCap: "butt",
							size: 300,
							lineWidth: 18,
							tronStyle: true,
							animate: false,
							trackOffset: 4
						});
						$(".miniScore").miniChart({
							trackColor: "#606060",
							scaleColor: false,
							lineCap: "butt",
							size: 80,
							lineWidth: 2,
							tronStyle: true,
							animate: false,
							trackOffset: 0
						});
						$(".mediumScore").mediumChart({
							trackColor: "#606060",
							scaleColor: false,
							lineCap: "butt",
							size: 180,
							lineWidth: 10,
							tronStyle: true,
							animate: false,
							trackOffset:2
						});
					};
					
				initPieChart();
				
				
				
				$("#grabThis").appendTo("#pasteHere");
				$("#sectionThatSuggestionsOutputs").appendTo("#sectionThatReceivesSuggestions");
				$("#sectionThatReceivesSuggestions").css("visibility", "visible");
				$("#sectionThatSuggestionsOutputs").css("visibility", "visible");

				$("#sectionThatSuggestionsIIIOutputs").appendTo("#sectionThatReceivesSuggestionsIII");
				$("#sectionThatReceivesSuggestionsIII").css("visibility", "visible");
				$("#sectionThatSuggestionsIIIOutputs").css("visibility", "visible");

				$("#sectionThatScrapeOutputs").appendTo("#sectionThatReceivesRankings");
				$("#sectionThatReceivesRankings").css("visibility", "visible");
				$("#sectionThatScrapeOutputs").css("visibility", "visible");
			
			});
	