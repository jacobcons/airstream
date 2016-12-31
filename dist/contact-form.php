<?php
	$errName = "";
	$errEmail = "";
	$errMessage = "";
	$result = "";

	if (!empty($_POST)) {
		$name = $_POST["name"];
		$email = $_POST["email"];
		$date = $_POST["date"];
		$location = $_POST["location"];
		$message = $_POST["message"];
		$to = "info@airstreamstudio.co.uk";
		$subject = "Airstream website enquiry";
		$body = "From: $name\n\nE-Mail: $email\n\nDate: $date\n\nLocation: $location\n\nMessage: $message";

		if (!$name) {
			$errName = "Please enter your name";
		}

		if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$errEmail = "Please enter a valid email address";
		}

		if (!$message) {
			$errMessage = "Please enter a message";
		}

		if (!$errName || !$errEmail || !$errMessage) {
			$result = "<div class='result-container'>";
				if (mail($to, $subject, $body)) {
					$result .= "<p class='small-print small-print-success'>Thank you for getting in touch. We'll get back to you as soon as possible</p>";
				} else {
					$result .= "<p class='small-print small-print-alert'>There was an error sending your email.</p>";
				}
			$result .= "</div>";
		}
	}
?>

<form class="contact-form" method="post" enctype="multipart/form-data">
	<h2>Get in touch</h2>

	<p>Name (required)</p>
	<input name="name" type="text" size="30">
	<?php echo "<p class='small-print small-print-alert'>$errName</p>"; ?>

	<p>Email (required)</p>
	<input name="email" type="text" size="30">
	<?php echo "<p class='small-print small-print-alert'>$errEmail</p>"; ?>

	<p>Event Date</p>
	<input name="date" type="text" size="30">

	<p>Event Location</p>
	<div id="locationField">
      <input id="autocomplete" name="location" type="text" size="30" placeholder=""></input>
    </div>

	<p>Message (required)</p>
	<textarea name="message" rows="7" cols="30"></textarea>
	<?php echo "<p class='small-print small-print-alert'>$errMessage</p>"; ?>

	<div class="submit-container">
		<input type="submit">
			<img src="imgs/icons/paper-plane.svg" class="submit-btn svg">
			<h2 class="submit-label">Send</h2>
		</input>
	</div>

	<?php echo $result; ?>
</form>

<script>
	var autocomplete;

	function initAutocomplete() {
		// Create the autocomplete object, restricting the search to geographical
		// location types.
		autocomplete = new google.maps.places.Autocomplete(
		/** @type {!HTMLInputElement} */(document.getElementById('autocomplete')));
	}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQFwzDyaunRwLLXw5HmGbtzU7kcXCBCwc&libraries=places&callback=initAutocomplete" async defer></script>