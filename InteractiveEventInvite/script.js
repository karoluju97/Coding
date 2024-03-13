document.addEventListener('DOMContentLoaded', function() {
    // Selecting the form and confirmation message elements
    const rsvpForm = document.getElementById('rsvpForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Adding event listener to the form submission
    rsvpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Preventing default form submission behavior
        
        // Getting the selected attendance value
        const attendance = document.getElementById('attendance').value;

        // Checking if the user selected 'attending'
        if (attendance === 'yes') {
            // If attending, display party emoji and positive message
            confirmationMessage.innerHTML = '<p>🎉 Thank you for RSVPing! We can\'t wait to see you at the GIF Gala!</p>';
            confirmationMessage.classList.add('success'); // Adding success class for styling
        } else {
            // If not attending, display a different message
            confirmationMessage.innerHTML = '<p>Sorry to hear you can\'t make it. Hopefully, we\'ll catch you at the next event!</p>';
            confirmationMessage.classList.add('error'); // Adding error class for styling
        }

        // Displaying the confirmation message
        confirmationMessage.style.display = 'block';
    });
});
