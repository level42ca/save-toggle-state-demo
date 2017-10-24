function toggles() {
	// Variables:
    var Button = $('#toggleButton')
	var theDiv = $('.theDiv')
    var currentState = sessionStorage.getItem('savedState')
	
	// Load previous state:    
	if (currentState == 'false') { // Checks if the currentState of theDiv is True or False.
		Button.html('Toggle (The div is hidden)')
        theDiv.hide()
	} else {
		Button.html('Toggle (The div is visible)')
        theDiv.show()
	}
	
	// Toggle the div:
	Button.click(function(){
		theDiv.slideToggle(200, 'easeInOutQuint').promise().done(function() {
			if (theDiv.css('display') == 'none') {
				Button.html('Toggle (The div is hidden)'), sessionStorage.setItem('savedState', 'false');
			} else {
				Button.html('Toggle (The div is visible)'), sessionStorage.setItem('savedState', 'true');
			}
		});
	});
}

window.onload = function () {
	toggles();
}
