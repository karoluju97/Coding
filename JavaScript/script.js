// This function will be called when the button is clicked
function showWelcomeMessage() {
    // Get a reference to the message container
    var messageContainer = document.getElementById("messageContainer");
    
    // Set the message text to "Welcome!"
    messageContainer.textContent = "Welcome!";
}

// Get a reference to the button element using its ID
var button = document.getElementById("welcomeButton");

// Add an event listener to the button
button.addEventListener("click", showWelcomeMessage);
