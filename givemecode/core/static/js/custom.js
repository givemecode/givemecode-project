$(document).ready(function() {


	/* ===== THE COUNTDOWN SETTINGS ===== */

	$(".countdown").countEverest({
		// change your target date below
		day: 01,
		month: 01,
		year: 2015
	});



	/* ===== THE NEWSLETTER SIGNUP ===== */

	 $("#newsletter-signup").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "assets/newsletter.php",
			data: str,
			success: function(msg) {
				if(msg == 'OK') {
					result = '<div class="alert alert-success"><p class="lead">Yeeha, all good!</p></div>';
					// setTimeout("location.reload(true);",7000);
					window.setTimeout(function(){
				        window.location.href = "index.html";
				    }, 5000);
			  	} else {
					result = msg;
			  	}
			  	$('#error-info').html(result);
		    }
		});
		return false;
	});

	 /* end of scripts */
   
});