function toggles() {
	// Variables:
    console.log('[debug] - Variables have been set.'); // Debug line
    var Button = $('#toggleButton') // Stores the button we plan to capture in a variable called 'Button'
	var theDiv = $('.theDiv') // Stores the div we want to toggle in a variable called 'theDiv'
    var currentState = sessionStorage.getItem('savedState') // Stores the current saved state in a variable called 'currentState'
	
	// Load previous state:
	console.log('[debug] - Loading current state ...'); // Debug line
    
	if (currentState == 'false') { // Checks if the currentState of theDiv is True or False.
		console.log('[debug] - The current state is: "' + currentState + '" (Hidden).') // Debug line
		Button.html('Toggle (The div is hidden)') // Change the button text
        theDiv.hide() // Hide the div
	} else {
		console.log('[debug] - The current state is: "' + currentState + '" (Visible).') // Debug line
		Button.html('Toggle (The div is visible)') // Change the button text
        theDiv.show() // Show the div
	}
	
	// Toggle the div:
	Button.click(function(){ // When the button is clicked ...
		console.log('[debug] - The button has been clicked!') // Debug line
		theDiv.slideToggle('2000', 'easeInOutQuint').promise().done(function() { // ... toggle the div's visibility, and wait for the action to be completed.
            console.log('[debug] - Checking if the div is hidden or not.') // Debug line
			if (theDiv.css('display') == 'none') { // Check if the div is visible or not
				console.log('[debug] - The div is now hidden.') // Debug line
				Button.html('Toggle (The div is hidden)'), sessionStorage.setItem('savedState', 'false'); // Change the button text, and set the save state
				console.log('[debug] - Current state saved is now: ' + sessionStorage.getItem('savedState')); // Debug line
			} else {
                console.log('[debug] - The div is now visible.') // Debug line
				Button.html('Toggle (The div is visible)'), sessionStorage.setItem('savedState', 'true'); // Change the button text, and set the save state
				console.log('[debug] - Current state saved is now: ' + sessionStorage.getItem('savedState')); // Debug line
			}
		});
	});
}

window.onload = function () { // Run the "toggles" function on load
	toggles();
}