if($("#transcript").length != 0) {
	//transcript id found
	console.log("Transcript found");
	$("#transcript").hide();
	transcriptTxt = $("#transcript").html();

	if (transcriptTxt.trim()) {
		// is not empty nor whitespace
		console.log("Transcript not empty");
		var transcriptEnabled = true;
		var transcriptShown = false;

		$("body").append('<div class="transcriptWrapper"><div class="transcriptInnerWrapper"><div class="transcriptbtntoggle globalpos globalLabel"></div></div><div class="transcriptInnerWrapper2"><div class="outOfBox"></div><div class="transcriptPanelBox"><div class="transcriptContent"><!--content here--></div><div class="closebtn"></div></div></div></div>');

		var h = parseInt($(".transcriptInnerWrapper2").css("height"));
		$(".transcriptInnerWrapper2").css("height", 0);

		function enableTranscript (b) {
			if (b != false) {
				$(".transcriptbtntoggle").css("visibility", "visible");
			} else {
				$(".transcriptbtntoggle").css("visibility", "hidden");
				showTranscript(b);
			}
			transcriptEnabled = b;
		}

		function showTranscript (b) {
			if (b != false) {
				//$(".transcriptInnerWrapper2").show();
				$(".transcriptInnerWrapper2").css("height", h);
				//$(".outOfBox").show();
				$(".transcriptPanelBox").addClass("show");
			} else {
				$(".transcriptPanelBox").removeClass("show");
				//$(".outOfBox").hide();
				$(".transcriptPanelBox").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
					//$(".transcriptInnerWrapper2").hide();
					$(".transcriptInnerWrapper2").css("height", 0);
					$(".transcriptPanelBox").unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
				});
			}
			transcriptShown = b;
		}

		function toggleTranscript () {
			if (transcriptShown) {
				showTranscript (false);
			} else {
				showTranscript (true);
			}
		}

		$(".transcriptbtntoggle").click (function () {
			toggleTranscript();
		});

		$(".transcriptPanelBox .closebtn").click (function () {
			showTranscript(false);
		});

		$(".outOfBox").click (function () {
			showTranscript(false);
		});

		$(".transcriptContent").html(transcriptTxt);

		enableTranscript(transcriptEnabled);

	} else {
		//transcript content is empty
		//var transcriptEnabled = false;
		//var transcriptShown = false;

		//enableTranscript(transcriptEnabled);
		$(".transcriptbtntoggle").css("visibility", "hidden");
	}
} else {
	//no transcript id found
	$(".transcriptbtntoggle").css("visibility", "hidden");
}